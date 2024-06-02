/// <reference types="node" />
export declare const aesEncrypt: (text: string, key: Buffer, iv: Buffer) => {
    iv: string;
    encryptedData: string;
};
