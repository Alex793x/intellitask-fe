import React from 'react';
import {
  FileIcon,
  FileText as FileTextIcon,
  Film as FilmIcon,
  Music as MusicIcon
} from 'lucide-react';
import { types } from '../../lib/client'; // Adjust path as needed
import { useState } from "react";
import { Button } from '~/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip'
import { Badge } from '~/components/ui/badge'
import { Avatar } from '~/components/ui/avatar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
/**
 * Determines the appropriate React element (icon or image preview)
 * to represent a file based on its type.
 *
 * @param file - The file data transfer object.
 * @returns A React element representing the file type, or a default icon.
 */
export const getFileRepresentation = (
  file: types.FileDto | null | undefined
): React.ReactElement => {
  // Handle null/undefined file input gracefully
  if (!file || !file.fileType) {
    return (
      <div className="flex items-center justify-center h-full w-full bg-gray-200">
        <FileIcon className="h-4 w-4 text-gray-500" />
      </div>
    );
  }

  switch (file.fileType) {
    case 'IMAGE':
      return (
        <div className="relative w-full h-full bg-gray-100 overflow-hidden">
          <img
            src={file.fileUrl || ''}
            alt={file.fileName || 'Image preview'}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={(e) => {
              // Fallback if image fails to load
              (e.target as HTMLImageElement).outerHTML =
                '<div class="flex items-center justify-center h-full w-full bg-gray-200 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-off"><path d="M8.5 10.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5Z"/><path d="M21 15l-5-5L5 21"/><path d="m2 2 20 20"/><path d="M14.5 4.5h6v6"/><path d="M17 11.5a5 5 0 1 0-8-4"/></svg></div>';
            }}
          />
        </div>
      );
    case 'VIDEO':
      return (
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 h-full w-full flex items-center justify-center">
          <FilmIcon className="h-4 w-4 text-indigo-500" />
        </div>
      );
    case 'AUDIO':
      return (
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 h-full w-full flex items-center justify-center">
          <MusicIcon className="h-4 w-4 text-purple-500" />
        </div>
      );
    case 'PDF':
      return (
        <div className="bg-gradient-to-br from-red-50 to-red-100 h-full w-full flex items-center justify-center">
          <FileTextIcon className="h-4 w-4 text-red-500" />
        </div>
      );
    case 'DOCUMENT': // Explicitly handle DOCUMENT type
      return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-full w-full flex items-center justify-center">
          <FileTextIcon className="h-4 w-4 text-blue-500" />
        </div>
      );
    case 'FILE': // Generic file type
    default: // Fallback for unknown types
      return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-full w-full flex items-center justify-center">
          <FileIcon className="h-4 w-4 text-gray-500" />
        </div>
      );
  }
};

// Get role badge color function
const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case 'OWNER':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'ADMIN':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'CONTRIBUTOR':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'VIEWER':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

// Update the MembersList function with an accordion for former members
export const MembersList = ({ members }: { members: types.ProjectMemberDto[] }) => {
  const [showAll, setShowAll] = useState(false);
  const [formerMembersOpen, setFormerMembersOpen] = useState(false);
  const MAX_VISIBLE = 5;

  // Deduplicate members based on user.id (in case there are duplicates)
  const deduplicatedMembers = members.filter((member, index, self) =>
    index === self.findIndex(m => m.user?.id === member.user?.id)
  );

  // Separate active and inactive members
  const activeMembers = deduplicatedMembers.filter(member => !member.hasLeft);
  const inactiveMembers = deduplicatedMembers.filter(member => member.hasLeft);

  // Sort each group by role importance
  const sortByRole = (a: types.ProjectMemberDto, b: types.ProjectMemberDto) => {
    const roleOrder = {
      'OWNER': 0,
      'ADMIN': 1,
      'CONTRIBUTOR': 2,
      'VIEWER': 3
    };
    return (roleOrder[a.role as keyof typeof roleOrder] || 4) - (roleOrder[b.role as keyof typeof roleOrder] || 4);
  };

  const sortedActiveMembers = [...activeMembers].sort(sortByRole);
  const sortedInactiveMembers = [...inactiveMembers].sort(sortByRole);

  // All active members are always visible
  const visibleActiveMembers = showAll ? sortedActiveMembers :
    sortedActiveMembers.slice(0, activeMembers.length >= MAX_VISIBLE ? MAX_VISIBLE : activeMembers.length);

  // We'll handle inactive members visibility separately with the accordion
  const hasMoreActiveMembers = activeMembers.length > MAX_VISIBLE && !showAll;

  return (
    <div className="space-y-3">
      {/* Active Members */}
      <div>
        {visibleActiveMembers.map((member) => (
          <div key={member.id} className="py-1.5">
            <div className="relative flex items-center justify-between group">
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  {member.user?.image ? (
                    <img
                      src={member.user.image}
                      alt={member.user?.name || 'User'}
                    />
                  ) : (
                    <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs">
                      {(member.user?.name || 'U').charAt(0)}
                    </div>
                  )}
                </Avatar>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-sm font-medium truncate max-w-[120px]">
                        {member.user?.name || 'Unknown User'}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{member.user?.name || 'Unknown User'}</p>
                      <p className="text-xs text-muted-foreground">{member.user?.email}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <Badge className={getRoleBadgeColor(member.role)}>
                {member.role}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {/* Show More for Active Members */}
      {hasMoreActiveMembers && (
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-xs h-7"
          onClick={() => setShowAll(true)}
        >
          <span className="flex items-center">
            Show {activeMembers.length - MAX_VISIBLE} More <ChevronDown className="ml-1 h-3 w-3" />
          </span>
        </Button>
      )}

      {/* Show Less for Active Members */}
      {showAll && activeMembers.length > MAX_VISIBLE && (
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-xs h-7"
          onClick={() => setShowAll(false)}
        >
          <span className="flex items-center">
            Show Less <ChevronUp className="ml-1 h-3 w-3" />
          </span>
        </Button>
      )}

      {/* Former Members Accordion */}
      {inactiveMembers.length > 0 && (
        <Collapsible
          open={formerMembersOpen}
          onOpenChange={setFormerMembersOpen}
          className="mt-3"
        >
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="h-px bg-border flex-grow mr-2"></div>
            <CollapsibleTrigger asChild>
              <button className="flex items-center gap-1 px-2 py-1 rounded-sm hover:bg-muted/50 transition-colors">
                <span>Former Members ({inactiveMembers.length})</span>
                {formerMembersOpen ? (
                  <ChevronUp className="h-3 w-3" />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
              </button>
            </CollapsibleTrigger>
            <div className="h-px bg-border flex-grow ml-2"></div>
          </div>

          <CollapsibleContent className="pt-2">
            <div className="space-y-1.5">
              {sortedInactiveMembers.map((member) => (
                <div key={member.id}>
                  <div className="relative flex items-center justify-between group py-1.5">
                    <div className="absolute inset-0 rounded-md bg-muted/30 pointer-events-none"></div>

                    <div className="flex items-center gap-2 z-10">
                      <div className="relative">
                        <Avatar className="h-7 w-7">
                          {member.user?.image ? (
                            <img
                              src={member.user.image}
                              alt={member.user?.name || 'User'}
                              className="filter grayscale"
                            />
                          ) : (
                            <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs">
                              {(member.user?.name || 'U').charAt(0)}
                            </div>
                          )}
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 rounded-full w-3 h-3 bg-muted border border-background flex items-center justify-center">
                          <span className="text-[8px]">×</span>
                        </div>
                      </div>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="text-sm font-medium truncate max-w-[120px] text-muted-foreground">
                              {member.user?.name || 'Unknown User'}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{member.user?.name || 'Unknown User'}</p>
                            <p className="text-xs text-muted-foreground">{member.user?.email}</p>
                            <p className="text-xs text-red-500 mt-1">No longer a member</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <Badge className={`${getRoleBadgeColor(member.role)} opacity-70`}>
                      {member.role}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
}
