"use client";
import React, { useState } from "react";

const FileUploadSection = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFiles(Array.from(event.target.files));
        }
    };

    const handleSubmit = () => {
        // handle file upload logic here
        console.log("Selected files:", selectedFiles);
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <div className="bg-slate-950 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        className="block font-bold mb-2"
                        htmlFor="file-upload"
                    >
                        Choose files
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="file-upload"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileUploadSection;