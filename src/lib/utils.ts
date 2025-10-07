import type FileNode from "@/interfaces/FileNode";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

export function getFileType(file: FileNode): string {
    if (file.is_dir) return "Directory";
    const ext = file.name.split('.').pop()?.toLowerCase();
    return ext ? ext.toUpperCase() + " File" : "Unknown";
}

export function isImageFile(fileName: string): boolean {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp', 'tiff'];
    const ext = fileName.split('.').pop()?.toLowerCase();
    return ext ? imageExtensions.includes(ext) : false;
}

export function isVideoFile(fileName: string): boolean {
    const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'webm'];
    const ext = fileName.split('.').pop()?.toLowerCase();
    return ext ? videoExtensions.includes(ext) : false;
}
export function isAudioFile(fileName: string): boolean {
    const audioExtensions = ['mp3', 'wav', 'flac', 'aac', 'ogg', 'm4a'];
    const ext = fileName.split('.').pop()?.toLowerCase();
    return ext ? audioExtensions.includes(ext) : false;
}

export function isDocumentFile(fileName: string): boolean {
    const documentExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'md'];
    const ext = fileName.split('.').pop()?.toLowerCase();
    return ext ? documentExtensions.includes(ext) : false;
}

export function sortFiles(fileList: FileNode[], criterion: 'name' | 'size' | 'type' | 'modified' = 'name', mode: 'asc' | 'desc'): FileNode[] {
    const sortedList = [...fileList].sort((a, b) => {
        // Directories first
        if (a.is_dir && !b.is_dir) return -1;
        if (!a.is_dir && b.is_dir) return 1;

        let comparison = 0;
        switch (criterion) {
            case 'name':
                comparison = a.name.localeCompare(b.name);
                break;
            case 'size':
                comparison = (parseInt(a.size) || 0) - (parseInt(b.size) || 0);
                break;
            case 'type':
                { const typeA = a.name.split('.').pop() || '';
                const typeB = b.name.split('.').pop() || '';
                comparison = typeA.localeCompare(typeB);
                break; }
            case 'modified':
                comparison = new Date(a.mod_time).getTime() - new Date(b.mod_time).getTime();
                break;
        }
        return (mode == 'asc') ? comparison : (mode == 'desc') ? -comparison : comparison;
    });
    return sortedList;
}