import { Provider } from '@nestjs/common';
import { STORAGE_ADAPTER } from './storage.token';
import { CloudflareStorageAdapter } from './cloudflare-storage-adapter/cloudflare-storage.adapter';

require('dotenv').config();

export const createStorageProvider = (): Provider => {
    return {
        provide: STORAGE_ADAPTER,
        useFactory: () => {
            const config = {
                accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
                accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID!,
                secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY!,
                bucketName: process.env.CLOUDFLARE_BUCKET_NAME!,
                publicUrl: process.env.CLOUDFLARE_PUBLIC_URL!,
            };
            return new CloudflareStorageAdapter(config);
        },
    };
};