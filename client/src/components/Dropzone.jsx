import { UploadCloud, Image as ImageIcon } from "lucide-react";
import { useRef } from "react";

export default function Dropzone({ onFile, compact = false }) {
  const inputRef = useRef(null);

  const pick = (file) => {
    if (!file) return;
    const valid = ["image/png", "image/jpeg", "image/webp"];
    if (!valid.includes(file.type)) {
      alert("Please upload a PNG, JPG or WEBP image.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("Please keep the image under 10 MB.");
      return;
    }
    onFile(file);
  };

  return (
    <div
      className={`dropzone ${compact ? "compact" : ""}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => { e.preventDefault(); pick(e.dataTransfer.files?.[0]); }}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
    >
      <input ref={inputRef} hidden type="file" accept="image/png,image/jpeg,image/webp" onChange={e => pick(e.target.files?.[0])}/>
      <div className="drop-icon"><UploadCloud size={compact ? 22 : 30}/></div>
      <div>
        <strong>{compact ? "Replace image" : "Drop an image here"}</strong>
        <p>{compact ? "PNG, JPG or WEBP" : "or click to browse · PNG, JPG or WEBP · up to 10 MB"}</p>
      </div>
      <ImageIcon className="drop-image" size={34}/>
    </div>
  );
}