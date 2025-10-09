import type FileNode from '@/interfaces/FileNode';
import { File, FileText, Image, FileSpreadsheet, Presentation, Archive, Music, Film, Code, Folder } from 'lucide-react';


interface FileIcon {
    type: string;
    color: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any;
}

const defaultIcon: FileIcon = {
    type: 'default',
    color: '#A0AEC0',
    component: File,
};

const folderIcon: FileIcon = {
    type: 'folder',
    color: '#ECC94B',
    component: Folder,
};

const fileTypeToIconMap: FileIcon[] = [
    {
        type: 'application/pdf',
        color: '#E53E3E',
        component: FileText,
    },
    {
        type: 'image/jpeg',
        color: '#4299E1',
        component: Image,
    },
    {
        type: 'image/png',
        color: '#4299E1',
        component: Image,
    },
    {
        type: 'image/gif',
        color: '#4299E1',
        component: Image,
    },
    {
        type: 'text/plain',
        color: '#718096',
        component: FileText,
    },
    {
        type: 'application/msword',
        color: '#2B6CB0',
        component: FileText,
    },
    {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        color: '#2B6CB0',
        component: FileText,
    },
    {
        type: 'application/vnd.ms-excel',
        color: '#38A169',
        component: FileSpreadsheet,
    },
    {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        color: '#38A169',
        component: FileSpreadsheet,
    },
    {
        type: 'application/vnd.ms-powerpoint',
        color: '#DD6B20',
        component: Presentation,
    },
    {
        type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        color: '#DD6B20',
        component: Presentation,
    },
    {
        type: 'application/zip',
        color: '#D69E2E',
        component: Archive,
    },
    {
        type: 'application/x-rar-compressed',
        color: '#D69E2E',
        component: Archive,
    },
    {
        type: 'audio/mpeg',
        color: '#805AD5',
        component: Music,
    },
    {
        type: 'audio/wav',
        color: '#805AD5',
        component: Music,
    },
    {
        type: 'audio/mp3',
        color: '#805AD5',
        component: Music,
    },
    {
        type: 'audio/ogg',
        color: '#805AD5',
        component: Music,
    },
    {
        type: 'audio/flac',
        color: '#805AD5',
        component: Music,
    },
    {
        type: 'audio/aac',
        color: '#805AD5',
        component: Music,
    },
    {
        type: 'audio/webm',
        color: '#805AD5',
        component: Music,
    },
    {
        type: 'audio/x-wav',
        color: '#805AD5',
        component: Music,
    },
    {
        type: 'audio/x-m4a',
        color: '#805AD5',
        component: Music,
    },
    {
        type: 'video/mp4',
        color: '#ED8936',
        component: Film,
    },
    {
        type: 'video/x-matroska',
        color: '#ED8936',
        component: Film,
    },
    {
        type: 'application/json',
        color: '#319795',
        component: Code,
    },
    {
        type: 'application/javascript',
        color: '#319795',
        component: Code,
    },
    {
        type: 'text/html',
        color: '#3182CE',
        component: Code,
    },
    {
        type: 'text/css',
        color: '#3182CE',
        component: Code,
    },
    {
        type: 'text/markdown',
        color: '#805AD5',
        component: FileText,
    },
    {
        type: 'application/xml',
        color: '#319795',
        component: Code,
    },
    {
        type: 'application/vnd.oasis.opendocument.text',
        color: '#2B6CB0',
        component: FileText,
    },
    {
        type: 'application/vnd.oasis.opendocument.spreadsheet',
        color: '#38A169',
        component: FileSpreadsheet,
    },
    {
        type: 'application/vnd.oasis.opendocument.presentation',
        color: '#DD6B20',
        component: Presentation,
    },
    {
        type: 'application/x-typescript',
        color: '#2B6CB0',
        component: Code,
    },
    {
        type: 'application/x-php',
        color: '#6E44FF',
        component: Code,
    },
    {
        type: 'application/x-go',
        color: '#00ADD8',
        component: Code,
    },
    {
        type: 'application/x-python',
        color: '#FFD43B',
        component: Code,
    },
];
export const getFileIcon = (file: FileNode): FileIcon => {
    if (file.is_dir) {
        return folderIcon;
    }
    const fileIcon = fileTypeToIconMap.find(icon => icon.type === file.type);    
    return fileIcon || defaultIcon;
}
    