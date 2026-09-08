type TagProps = {
    texto: string;
    className?: string;
};

export default function Tag({
    texto,
    className = "",
}: TagProps) {
    return (
    <span
        className={`
        inline-flex
        items-center
        gap-[6px]
        rounded-full
        bg-[#FFE9E4]
        px-[14px]
        py-[6px]
        [font-family:var(--fonte-titulo)]
        text-[12.5px]
        font-semibold
        tracking-[0.02em]
        text-[var(--cor-coral-escuro)]
        rotate-[-1.5deg]
        mb-[30px]
        ${className}
        `}
    >
        <strong>✦ {texto}</strong>
    </span>
    );
}