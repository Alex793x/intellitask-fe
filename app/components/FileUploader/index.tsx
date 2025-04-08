import { useState } from 'react';
import { FileUpload, useFileUpload } from '@ark-ui/react';
import getRequestClient from '../../lib/getRequestClient';
import { Upload, FileIcon, X, CheckCircle, UploadCloud, Trash2 } from 'lucide-react';
import { types } from '../../lib/client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '../ui/dialog';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

// Define upload types
enum UploadType {
  DOCUMENT = 'DOCUMENT',
  MEDIA = 'MEDIA',
}

interface FileUploaderProps {
  teamspaceId?: string;
  projectId?: string;
  chatroomId?: string;
  organizationId: string;
  receiverIds?: string[];
  onUploadComplete?: (results: any[]) => void;
  compact?: boolean;
  files?: types.FileDto[];
  className?: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  teamspaceId = null,
  projectId = null,
  chatroomId = null,
  organizationId,
  receiverIds = [],
  onUploadComplete,
  compact = false,
  files = [],
  className = ''
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [uploadResults, setUploadResults] = useState<any[]>([]);
  const fileUpload = useFileUpload({
    maxFiles: 10,
    maxFileSize: 50 * 1024 * 1024,
  });

  const getUploadTypeForFile = (file: File): UploadType => {
    const mimeType = file.type;
    if (mimeType.startsWith('image/') || mimeType.startsWith('video/') || mimeType.startsWith('audio/')) {
      return UploadType.MEDIA;
    }
    return UploadType.DOCUMENT;
  };

  const resetState = () => {
    fileUpload.clearFiles();
    setIsUploading(false);
    setUploadComplete(false);
    setUploadResults([]);
  };

  const handleDialogClose = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      resetState();
    }
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  // Format file name to prevent overflow by truncating if needed
  const formatFileName = (fileName: string, maxLength: number = 28): string => {
    if (!fileName) return '';
    if (fileName.length <= maxLength) return fileName;

    const extension = fileName.split('.').pop() || '';
    const nameWithoutExt = fileName.substring(0, fileName.length - extension.length - 1);

    if (nameWithoutExt.length <= maxLength - 6) return fileName;

    return `${nameWithoutExt.substring(0, maxLength - 6 - extension.length)}...${extension.length > 0 ? '.' + extension : ''}`;
  };

  const handleUpload = async (filesToUpload: File[]): Promise<void> => {
    if (!filesToUpload.length || !organizationId) {
      return;
    }

    setIsUploading(true);
    setUploadComplete(false);

    const uploadPromises = filesToUpload.map(async (file) => {
      try {
        const formData = new FormData();
        const currentUploadType = getUploadTypeForFile(file);

        const metadata = {
          teamspaceId: teamspaceId || null,
          projectId: projectId || null,
          chatroomId: chatroomId || null,
          organizationId,
          uploadType: currentUploadType,
        };

        formData.append('metadata', JSON.stringify(metadata));

        if (receiverIds.length > 0) {
          formData.append('receiverIds', JSON.stringify(receiverIds));
        }

        formData.append('file', file);

        const response = await getRequestClient().fileManagement.uploadFilesWithMetadata('POST', formData);

        if (!response.ok) {
          throw new Error(`Upload failed for ${file.name}: ${response.statusText} (${response.status})`);
        }

        console.log(`Upload successful for: ${file.name}`);
        return {
          success: true,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          uploadType: currentUploadType
        };

      } catch (error) {
        console.error(`Error uploading file ${file.name}:`, error instanceof Error ? error.message : String(error));
        return {
          success: false,
          fileName: file.name,
          error: error instanceof Error ? error.message : String(error)
        };
      }
    });

    const results = await Promise.allSettled(uploadPromises);

    // Define the success type for proper type checking
    type SuccessUploadResult = {
      success: true;
      fileName: string;
      fileSize: number;
      fileType: string;
      uploadType: UploadType;
    };

    type FailedUploadResult = {
      success: false;
      fileName: string;
      error: string;
    };

    type UploadResult = SuccessUploadResult | FailedUploadResult;

    const successfulUploads = results
      .filter((result): result is PromiseFulfilledResult<UploadResult> =>
        result.status === 'fulfilled' && result.value.success === true
      )
      .map(result => result.value as SuccessUploadResult);

    const failedUploads = results
      .filter(result =>
        result.status === 'rejected' ||
        (result.status === 'fulfilled' && !result.value.success)
      );

    setUploadResults(successfulUploads);
    setIsUploading(false);
    setUploadComplete(true);

    if (onUploadComplete && successfulUploads.length > 0) {
      onUploadComplete(successfulUploads);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={handleDialogClose}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size={compact ? "sm" : "default"}
          className={cn(
            "text-emerald-600 border-emerald-200 hover:bg-emerald-50",
            className
          )}
        >
          <UploadCloud className={cn("mr-2", compact ? "h-4 w-4" : "h-5 w-5")} />
          Upload
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md w-[95vw] max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle>Upload Files</DialogTitle>
        </DialogHeader>

        <div className="py-4 flex-1 overflow-y-auto">
          <FileUpload.RootProvider value={fileUpload}>
            <div className="w-full">
              <FileUpload.Context>
                {(context) => (
                  <>
                    {/* Show empty state when no files are selected */}
                    {context.acceptedFiles.length === 0 && !uploadComplete && (
                      <FileUpload.Dropzone
                        className="border-2 border-dashed border-gray-300 rounded-lg text-center p-4 sm:p-8 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex flex-col items-center">
                          <UploadCloud className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-500 mb-3" />
                          <p className="text-gray-700 font-medium mb-1">Drag and drop files here</p>
                          <p className="text-gray-500 text-sm mb-4">or</p>
                          <FileUpload.Trigger asChild>
                            <Button>Choose Files</Button>
                          </FileUpload.Trigger>
                        </div>
                      </FileUpload.Dropzone>
                    )}

                    {/* Show files being prepared for upload */}
                    {context.acceptedFiles.length > 0 && !isUploading && !uploadComplete && (
                      <div className="space-y-4">
                        <div className="border rounded-md">
                          <div className="max-h-[30vh] overflow-y-auto space-y-1 px-2 py-2">
                            {context.acceptedFiles.map((file) => (
                              <FileUpload.Item
                                key={`${file.name}-${file.size}`}
                                file={file}
                                className="flex items-center p-2 rounded hover:bg-gray-50 transition-colors"
                              >
                                <FileUpload.ItemPreview type="image/*" className="w-10 h-10 min-w-[2.5rem] mr-3 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
                                  <FileUpload.ItemPreviewImage className="max-w-full max-h-full object-cover" />
                                </FileUpload.ItemPreview>

                                <FileUpload.ItemPreview type=".*" className="w-10 h-10 min-w-[2.5rem] mr-3 bg-gray-100 flex items-center justify-center rounded">
                                  <FileIcon className="h-5 w-5 text-gray-500" />
                                </FileUpload.ItemPreview>

                                <div className="flex-1 min-w-0 pr-2">
                                  <div className="font-medium text-sm truncate" title={file.name}>
                                    {formatFileName(file.name)}
                                  </div>
                                  <div className="text-xs text-gray-500">{formatFileSize(file.size)}</div>
                                </div>

                                <FileUpload.ItemDeleteTrigger className="ml-1 text-red-500 hover:text-red-700 p-1 flex-shrink-0">
                                  <Trash2 className="h-4 w-4" />
                                </FileUpload.ItemDeleteTrigger>
                              </FileUpload.Item>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                          <Button
                            onClick={() => handleUpload(context.acceptedFiles)}
                            className="w-full"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Upload {context.acceptedFiles.length} File{context.acceptedFiles.length !== 1 ? 's' : ''}
                          </Button>

                          <div className="text-center">
                            <FileUpload.Trigger className="text-xs text-emerald-600 hover:underline inline-flex items-center">
                              <span className="mr-1">+</span>
                              Add More Files
                            </FileUpload.Trigger>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Upload in progress */}
                    {isUploading && (
                      <div className="py-8 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 relative mb-4">
                          <div className="w-full h-full rounded-full border-4 border-emerald-100 animate-pulse"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="animate-spin h-8 w-8 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </div>
                        </div>
                        <p className="font-medium text-gray-700">Uploading files...</p>
                        <p className="text-sm text-gray-500 mt-1">Please wait while your files are being uploaded</p>
                      </div>
                    )}

                    {/* Upload complete */}
                    {uploadComplete && (
                      <div className="py-8 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                          <CheckCircle className="h-8 w-8 text-emerald-600" />
                        </div>
                        <p className="font-medium text-gray-700">Upload Complete!</p>
                        <p className="text-sm text-gray-500 mt-1 mb-4">Successfully uploaded {uploadResults.length} file{uploadResults.length !== 1 ? 's' : ''}</p>

                        <div className="flex space-x-3">
                          <Button
                            onClick={() => {
                              resetState();
                              setDialogOpen(false);
                            }}
                            variant="outline"
                          >
                            Close
                          </Button>
                          <Button
                            onClick={() => {
                              resetState();
                            }}
                          >
                            Upload More Files
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </FileUpload.Context>

              <FileUpload.HiddenInput />
            </div>
          </FileUpload.RootProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};
