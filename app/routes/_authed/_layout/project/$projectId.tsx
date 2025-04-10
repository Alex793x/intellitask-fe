import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAtom, useSetAtom } from 'jotai'
import { currentChatroomAtom, teamspacesAtom } from '~/lib/atoms/teamspace/atom'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { ChatInput, ChatInputSubmit, ChatInputTextArea } from '~/components/ui/chat-input'
import { MessageCircle, MessageSquarePlus, Settings, Users, FolderOpen, Briefcase, ChevronRight, Home, Lock, Trash2, AlertCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import getRequestClient from '~/lib/getRequestClient'
import { Link } from '@tanstack/react-router'
import { cn } from '~/lib/utils'
import { Skeleton } from '~/components/ui/skeleton'
import { z } from 'zod'
import ProjectSettingsModal from '~/components/ProjectSettingsModal'
import { types } from '~/lib/client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip'
import ManageMembersModal from '~/components/ManageMembersModal'
import { generateChatroomMembers } from '@/utils/chatroom-utilities'
import { FileUploader } from '@/components/FileUploader'
import { FileIcon } from 'lucide-react'
import { getFileRepresentation, MembersList } from '~/utils/general-utitlities'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"

export const Route = createFileRoute('/_authed/_layout/project/$projectId')({
  params: z.object({
    projectId: z.string(),
  }),

  component: ProjectPage,
})

function ProjectPage() {

  const { projectId } = Route.useParams()
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userInput, setUserInput] = useState('')
  const [newChatroomName, setNewChatroomName] = useState('')
  const [showContextForm, setShowContextForm] = useState(false)
  const [showNewChatroomInput, setShowNewChatroomInput] = useState(false)
  const [fileToDelete, setFileToDelete] = useState<types.FileDto | null>(null)
  const [deletingFile, setDeletingFile] = useState(false)

  // Jotai atoms
  const [teamspaces, setTeamspaces] = useAtom(teamspacesAtom)
  const setCurrentChatroom = useSetAtom(currentChatroomAtom)

  // Get the state from the route context
  const state = Route.useRouteContext()
  const [userID] = useState<string>(state.userId)

  const currentProject = teamspaces
    .flatMap(teamspace => teamspace.projects || [])
    .find(project => project.id === projectId);

  const currentTeamspace = teamspaces
    .find(teamspace => teamspace.id === currentProject?.teamspaceId);

  useEffect(() => {
    if (currentProject) {
      setIsLoading(false)
      console.log('files', currentProject.files)
    }
  }, [currentProject])

  const navigate = useNavigate()

  // Show loading skeleton while data is being fetched
  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col h-full">
        <div className="h-1.5 bg-gray-200 w-full" />
        <div className="p-6 max-w-5xl mx-auto w-full flex-1">
          <div className="mb-8 relative">
            <Skeleton className="h-10 w-60 mb-2" />
            <Skeleton className="h-4 w-full max-w-md mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div>
                <Skeleton className="h-32 w-full mb-6" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Skeleton className="h-8 w-40" />
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Skeleton className="h-60 w-full" />
              <Skeleton className="h-60 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If no project is selected, show a message
  if (!currentProject) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or you don't have access to it.</p>
        {currentTeamspace ? (
          <Button variant="outline" asChild>
            <Link to={`/teamspace/$teamspaceId`} params={{ teamspaceId: currentTeamspace.id }}>
              Back to Teamspace
            </Link>
          </Button>
        ) : (
          <Button variant="outline" asChild>
            <Link to="/chat">Go to Chat</Link>
          </Button>
        )}
      </div>
    )
  }

  const createChatroom = async (name = '') => {
    if (loading) return
    setLoading(true)

    const chatroomMembers = generateChatroomMembers({
      currentUserId: userID,
      project: currentProject,
      teamspace: currentTeamspace
    })

    try {
      // Create a new chatroom associated with this project
      const { data: createdChatroom } = await getRequestClient().chatrooms.createChatroom({
        chatroomCreatorId: userID,
        chatroomMembers: chatroomMembers,
        isPrivate: false,
        projectId: currentProject.id,
        name: name.trim() || 'New Chat Conversation',
        teamIds: [],
        type: 'PROJECT_CHATROOM'
      })

      currentProject.chatrooms?.push(createdChatroom);

      // Navigate to the new chatroom
      setCurrentChatroom(createdChatroom)
      navigate({ to: '/chat/$chatroomId', params: { chatroomId: createdChatroom.id } })

    } catch (error) {
      console.error('Error creating chatroom:', error)
    } finally {
      setLoading(false)
      setShowNewChatroomInput(false)
      setNewChatroomName('')
    }
  }

  const startQuickChat = async () => {
    if (!userInput.trim() || loading) return

    try {
      setLoading(true)


      const chatroomMembers = generateChatroomMembers({
        currentUserId: userID,
        project: currentProject,
        teamspace: currentTeamspace
      })

      const { data: createdChatroom } = await getRequestClient().chatrooms.createChatroom({
        chatroomCreatorId: userID,
        chatroomMembers: chatroomMembers,
        isPrivate: false,
        projectId: currentProject.id,
        name: 'New Chat Conversation',
        teamIds: [],
        type: 'PROJECT_CHATROOM'
      })

      currentProject.chatrooms?.push(createdChatroom);

      // Save the user's message to send once we navigate
      localStorage.setItem('pendingMessage', userInput)

      // Navigate to the chat view
      setCurrentChatroom(createdChatroom)
      navigate({ to: '/chat/$chatroomId', params: { chatroomId: createdChatroom.id } })

    } catch (error) {
      console.error('Error starting quick chat:', error)
      setLoading(false)
    }
  }

  // Function to handle project updates from settings
  const handleProjectUpdated = (updatedProject: types.ProjectDto) => {
    const updatedTeamspaces = teamspaces.map(teamspace => {
      if (teamspace.id === currentTeamspace?.id) {
        return {
          ...teamspace,
          projects: teamspace.projects?.map(project =>
            project.id === currentProject?.id ? updatedProject : project
          )
        };
      }
      return teamspace;
    });

    setTeamspaces(updatedTeamspaces);
  };

  const deleteFile = async (file: types.FileDto) => {
    if (!file.id || deletingFile) return

    try {
      setDeletingFile(true)

      // Delete the file from the project
      await getRequestClient().chatrooms.deleteOneProjectFile({
        fileId: file.id,
        projectId: currentProject.id
      })

      // Update local state
      setTeamspaces(prev => prev.map(teamspace => {
        if (teamspace.id === currentTeamspace?.id) {
          return {
            ...teamspace,
            projects: teamspace.projects?.map(project => {
              if (project.id === currentProject?.id) {
                return {
                  ...project,
                  files: project.files?.filter(f => f.id !== file.id)
                }
              }
              return project
            })
          }
        }
        return teamspace
      }))

    } catch (error) {
      console.error('Error deleting file:', error)
    } finally {
      setDeletingFile(false)
      setFileToDelete(null)
    }
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Project accent banner */}
      <div className="h-1.5 bg-emerald-500 w-full flex-shrink-0" />

      <div className="p-6 max-w-5xl mx-auto w-full flex-1 overflow-y-auto">
        {/* Breadcrumb navigation */}
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Link to="/chat" className="flex items-center hover:text-foreground transition-colors">
            <Home className="h-3.5 w-3.5 mr-1" />
            Home
          </Link>
          {currentTeamspace && (
            <>
              <ChevronRight className="h-3.5 w-3.5 mx-1.5" />
              <Link
                to={`/teamspace/$teamspaceId`}
                params={{
                  teamspaceId: currentTeamspace.id
                }}
                className="flex items-center hover:text-foreground transition-colors"
              >
                <Briefcase className="h-3.5 w-3.5 mr-1.5" />
                {currentTeamspace.name}
              </Link>
            </>
          )}
          <ChevronRight className="h-3.5 w-3.5 mx-1.5" />
          <span className="font-medium text-foreground flex items-center">
            <FolderOpen className="h-3.5 w-3.5 mr-1.5" />
            Project
          </span>
        </div>

        {/* Project Header */}
        <div className="mb-8 relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <FolderOpen className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{currentProject.name}</h1>
              <div className="flex items-center mt-1">
                <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                  Project
                </span>
                {currentProject.isPrivate && (
                  <span className="ml-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">
                    <Lock className="h-3 w-3 mr-1" />
                    Private
                  </span>
                )}
                {currentTeamspace && (
                  <span className="ml-2 text-sm text-muted-foreground flex items-center">
                    <Briefcase className="h-3 w-3 mr-1" />
                    {currentTeamspace.name}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-muted-foreground">{currentProject.description || 'No description provided'}</p>
          </div>
          <div className="absolute top-0 right-0">
            <ProjectSettingsModal
              project={currentProject}
              userId={userID}
              onProjectUpdated={handleProjectUpdated}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column (2/3 width on desktop) */}
          <div className="md:col-span-2 space-y-6">
            {/* Start a new chat section */}
            <Card className="border-b-4 border-b-emerald-500">
              <CardHeader className="pb-3">
                <CardTitle>New chat in this project</CardTitle>
                <CardDescription>
                  Start a new conversation in the context of this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChatInput
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onSubmit={startQuickChat}
                  hasMessages={false}
                >
                  <ChatInputTextArea
                    placeholder={loading ? "Creating chat..." : "Type a message to start a new chat..."}
                    disabled={loading}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        startQuickChat()
                      }
                    }}
                  />
                  <ChatInputSubmit disabled={loading || !userInput.trim()} />
                </ChatInput>
              </CardContent>
            </Card>

            {/* Existing chatrooms in this project */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Chats in this project</h2>

                {showNewChatroomInput ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="px-3 py-1 border rounded-md text-sm"
                      placeholder="Chatroom name..."
                      value={newChatroomName}
                      onChange={(e) => setNewChatroomName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          createChatroom(newChatroomName)
                        } else if (e.key === 'Escape') {
                          setShowNewChatroomInput(false)
                          setNewChatroomName('')
                        }
                      }}
                      autoFocus
                    />
                    <Button
                      size="sm"
                      onClick={() => createChatroom(newChatroomName)}
                      disabled={loading}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer"
                    >
                      Create
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setShowNewChatroomInput(false)
                        setNewChatroomName('')
                      }}
                      className="hover:cursor-pointer"
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button
                    size="sm"
                    onClick={() => setShowNewChatroomInput(true)}
                    disabled={loading}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer"
                  >
                    <MessageSquarePlus className="h-4 w-4 mr-2" /> New Chat
                  </Button>
                )}
              </div>

              {/* List of chatrooms */}
              {currentProject.chatrooms && currentProject.chatrooms.length > 0 ? (
                <div className="space-y-3">
                  {currentProject.chatrooms.map(chatroom => (
                    <Card
                      key={chatroom.id}
                      className={cn(
                        "cursor-pointer transition-all border-l-4 border-l-transparent",
                        "hover:shadow-md hover:border-l-emerald-500 hover:bg-muted/30"
                      )}
                      onClick={() => {
                        setCurrentChatroom(chatroom)
                        navigate({ to: '/chat' })
                      }}
                    >
                      <CardHeader className="py-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base flex items-center">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            {chatroom.name}
                            {chatroom.isPrivate && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span>
                                      <Lock className="h-3 w-3 ml-2 text-red-500" />
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Private</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </CardTitle>
                          <div className="flex items-center gap-3 text-muted-foreground text-xs">
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {chatroom.members?.length || 1}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="border rounded-lg p-8 text-center bg-muted/20">
                  <h3 className="font-medium mb-2">No chats yet</h3>
                  <p className="text-muted-foreground mb-4">Start by creating your first chat in this project</p>
                  <Button
                    variant="outline"
                    onClick={() => setShowNewChatroomInput(true)}
                    className="border-emerald-600/20 text-emerald-700 hover:bg-emerald-50"
                  >
                    <MessageSquarePlus className="h-4 w-4 mr-2" /> Create Chat
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Right column (1/3 width on desktop) */}
          <div className="space-y-6">
            {/* Project Context (similar to teamspace context) */}
            <Card className="border-t-4 border-t-emerald-500">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Project Context</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:cursor-pointer"
                    onClick={() => setShowContextForm(!showContextForm)}
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </CardTitle>
                <CardDescription>
                  Information about this project's purpose
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showContextForm ? (
                  <div className="space-y-4">
                    <textarea
                      className="w-full min-h-[150px] p-3 border rounded-md"
                      placeholder="Describe what this teamspace is used for..."
                      value={currentProject.context}
                    />
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setShowContextForm(false)}>
                        Cancel
                      </Button>
                      <Button size="sm" onClick={() => setShowContextForm(false)}>
                        Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-sm">
                    <p>{currentProject.context}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Project Members */}
            <Card className="border-t-4 border-t-emerald-500">
              <CardHeader>
                <CardTitle>Members</CardTitle>
                <CardDescription>
                  People with access to this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                {currentProject.members && currentProject.members.length > 0 ? (
                  <MembersList members={currentProject.members} />
                ) : (
                  <div className="text-sm text-muted-foreground">
                    Only you have access to this project
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <ManageMembersModal
                  type="project"
                  projectId={currentProject.id}
                  teamspaceId={currentProject.teamspaceId}
                  members={currentProject.members || []}
                  userId={userID}
                  onMembersChanged={() => {
                    // Refresh project data when members change
                    getRequestClient().chatrooms.getTeamspaces()
                      .then(({ data }) => {
                        if (data) {
                          setTeamspaces(data);
                        }
                      });
                  }}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-emerald-600/20 text-emerald-700 hover:bg-emerald-50 hover:cursor-pointer"
                  >
                    <Users className="h-4 w-4 mr-2" /> Manage Members
                  </Button>
                </ManageMembersModal>
              </CardFooter>
            </Card>

            {/* Project Stats */}
            <Card className="border-t-4 border-t-emerald-500">
              <CardHeader>
                <CardTitle>Project Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Chats</span>
                    <span className="font-medium">{currentProject.chatrooms?.length || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Members</span>
                    <span className="font-medium">{currentProject.members?.length || 1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Files</span>
                    <span className="font-medium">{currentProject.files?.length || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Created</span>
                    <span className="font-medium">
                      {new Date(currentProject.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  {currentProject.isPrivate && (
                    <div className="flex justify-between items-center pt-2 mt-2 border-t">
                      <span className="text-muted-foreground flex items-center">
                        <Lock className="h-3.5 w-3.5 mr-1.5 text-red-500" />
                        Visibility
                      </span>
                      <span className="font-medium text-sm bg-gray-100 px-2 py-0.5 rounded">Private</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Project Files Card */}
            <Card className="border-t-4 border-t-emerald-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>Project Files</span>
                  {/* Only show the upload button in the header when there are files */}
                  {currentProject.files && currentProject.files.length > 0 && (
                    <FileUploader
                      teamspaceId={currentTeamspace?.id}
                      projectId={currentProject.id}
                      organizationId={state.session?.activeOrganizationId || ''}
                      compact={true}
                      files={currentProject.files || []}
                      className="ml-auto"
                      onUploadComplete={(uploadedFiles) => {
                        console.log("Files uploaded successfully", uploadedFiles);
                        // Use the same targeted approach to refresh only the current project
                        getRequestClient().chatrooms.getProject(currentProject.id)
                          .then(({ data }) => {
                            if (data) {
                              // Update only this project in the teamspace state
                              setTeamspaces(prev => prev.map(teamspace => {
                                if (teamspace.id === currentTeamspace?.id) {
                                  return {
                                    ...teamspace,
                                    projects: teamspace.projects?.map(project =>
                                      project.id === currentProject.id ? data : project
                                    )
                                  };
                                }
                                return teamspace;
                              }));
                            }
                          })
                          .catch((error: Error) => {
                            console.error("Error refreshing project data:", error);
                          });
                      }}
                    />
                  )}
                </CardTitle>
                <CardDescription>
                  Upload and manage files for this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                {currentProject.files && currentProject.files.length > 0 ? (
                  <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                    {currentProject.files.map((file, idx) => {
                      return (
                        <div
                          key={file.id || idx}
                          className="flex items-center p-2 border rounded bg-white hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-10 h-10 mr-3 bg-gray-100 flex items-center justify-center rounded overflow-hidden flex-shrink-0">
                            {getFileRepresentation(file)}
                          </div>
                          <div className="flex-1 truncate">
                            <a
                              href={file.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-sm truncate hover:underline hover:text-emerald-600"
                              title={file.fileName}
                            >
                              {file.fileName || `File ${idx + 1}`}
                            </a>
                            <p className="text-xs text-muted-foreground">
                              {new Date(file.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setFileToDelete(file);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-muted/10 rounded-lg border border-dashed min-h-[160px] flex flex-col items-center justify-center">
                    <div className="bg-gray-50 p-4 rounded-full mb-3">
                      <FileIcon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <p className="text-base font-medium text-gray-700 mb-1">No files uploaded yet</p>
                    <p className="text-sm text-muted-foreground mb-4">Add files to this project</p>
                    <FileUploader
                      teamspaceId={currentTeamspace?.id}
                      projectId={currentProject.id}
                      organizationId={state.session?.activeOrganizationId || ''}
                      onUploadComplete={(uploadedFiles) => {
                        console.log("Files uploaded successfully", uploadedFiles);
                        // Use the same targeted approach to refresh only the current project
                        getRequestClient().chatrooms.getProject(currentProject.id)
                          .then(({ data }) => {
                            if (data) {
                              // Update only this project in the teamspace state
                              setTeamspaces(prev => prev.map(teamspace => {
                                if (teamspace.id === currentTeamspace?.id) {
                                  return {
                                    ...teamspace,
                                    projects: teamspace.projects?.map(project =>
                                      project.id === currentProject.id ? data : project
                                    )
                                  };
                                }
                                return teamspace;
                              }));
                            }
                          })
                          .catch((error: Error) => {
                            console.error("Error refreshing project data:", error);
                          });
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* File Delete Confirmation Dialog */}
      <Dialog open={!!fileToDelete} onOpenChange={(isOpen: boolean) => !isOpen && setFileToDelete(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              Delete File
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete <span className="font-medium">{fileToDelete?.fileName}</span>? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setFileToDelete(null)} disabled={deletingFile}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => fileToDelete && deleteFile(fileToDelete)}
              className="bg-red-600 hover:bg-red-700 text-white"
              disabled={deletingFile}
            >
              {deletingFile ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
