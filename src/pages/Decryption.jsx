import React from "react";
import { useState } from "react";
import CryptoJS from "crypto-js";

const Decryption = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [decryptionKey, setDecryptionKey] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDecrypt = async () => {
    if (!selectedFile || !decryptionKey) {
      alert("Please upload a file and enter the decryption key!");
      return;
    }

    const reader = new FileReader();
    reader.readAsText(selectedFile, "UTF-8"); // Read as encrypted text
    reader.onload = () => {
      const encryptedContent = reader.result;

      try {
        // Decrypt content
        const decryptedBytes = CryptoJS.AES.decrypt(
          encryptedContent,
          decryptionKey
        );
        const decryptedBase64 = decryptedBytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedBase64) {
          alert("Decryption failed! Wrong key or corrupted file.");
          return;
        }

        // Convert Base64 back to binary
        const byteCharacters = atob(decryptedBase64);
        const byteNumbers = new Array(byteCharacters.length)
          .fill(0)
          .map((_, i) => byteCharacters.charCodeAt(i));
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {
          type: selectedFile.type.replace(".enc", ""),
        });

        // Create a download link
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = selectedFile.name.replace(".enc", ""); // Restore original file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        alert("Decryption failed! Ensure the correct key is used.");
      }
    };
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h2 className="text-2xl text-white">Decrypt Data</h2>
      <div class="flex items-center justify-center w-100">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-primary"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-white">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-white">Upload your **.enc** file</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
      {selectedFile ? (
        <div className="text-center text-white">
          <p className="font-medium">Uploaded File: {selectedFile.name}</p>
          {selectedFile.type.startsWith("image/") && (
            <div className="flex justify-center">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                className=" mt-2 w-40 h-40 object-cover rounded-lg border border-gray-300"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="text-white">Nothing was selected</div>
      )}
      <input
        className="bg-white w-100 rounded-xl p-4"
        placeholder="Enter the secret key"
        type="text"
        value={decryptionKey}
        onChange={(e) => setDecryptionKey(e.target.value)}
      />
      <button
        onClick={handleDecrypt}
        className="w-100 border border-white text-white button-custom bg-primary p-5"
      >
        Decrypt & Download
      </button>
    </div>
  );
};

export default Decryption;
