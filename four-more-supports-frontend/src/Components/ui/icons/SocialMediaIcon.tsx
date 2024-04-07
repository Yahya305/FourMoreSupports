interface SocialMediaIconProps {
    src: string;
    alt: string;
    className?: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
    src,
    alt,
    className,
}) => (
    <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`shrink-0 aspect-square fill-white w-[21px] ${className}`}
    />
);

export default SocialMediaIcon