import Image from "next/image";
export function ImageWithSkeleton({
  imgLoaded,
  setImgLoaded,
  imageSrc,
}: {
  imgLoaded: boolean;
  setImgLoaded: (loaded: boolean) => void;
  imageSrc: string | undefined;
}) {
  return (
    <div className="mx-auto block w-full max-w-[450px] p-3">
      {!imgLoaded && (
        <div className="bg-gray-300 absolute inset-0 animate-pulse rounded" />
      )}
      {imageSrc && (
        <Image
          width={400}
          height={300}
          src={imageSrc}
          onLoad={() => setImgLoaded(true)}
          alt="Image"
          priority={true}
          className={`h-auto w-full transition-opacity duration-300 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
