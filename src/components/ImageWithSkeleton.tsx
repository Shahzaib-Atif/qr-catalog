import Image from "next/image";
import { useState } from "react";
export function ImageWithSkeleton({
  imgLoaded,
  setImgLoaded,
  imageSrc,
}: {
  imgLoaded: boolean;
  setImgLoaded: (loaded: boolean) => void;
  imageSrc: string | undefined;
}) {
  const [error, setError] = useState(false);
  const fallbackImage = "/images/image-not-found.svg"; // in case of error

  return (
    <div className="relative mx-auto block w-full max-w-[450px] p-3">
      {!imgLoaded && !error && (
        <div className="bg-gray-300 absolute inset-0 animate-pulse rounded" />
      )}

      {imageSrc && (
        <Image
          width={400}
          height={300}
          src={error ? fallbackImage : imageSrc}
          onLoad={() => setImgLoaded(true)}
          onError={() => {
            setError(true);
            setImgLoaded(true); // stop showing the skeleton
          }}
          alt="Image"
          priority
          className={`h-auto w-full transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}
            ${error ? "opacity-70" : "opacity-100"}`}
        />
      )}
    </div>
  );
}
