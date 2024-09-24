export default function Button({ children, textOnly, className, ...props }) {
    
    const baseClasses = 'px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 border border-[#01ADB4]';
    const textOnlyClasses = 'bg-transparent text-[#01ADB4] hover:bg-[#e0f5f6]'; 
    const defaultClasses = 'bg-skyblue text-white hover:bg-[#019aaf]'; 
    
    const cssClasses = `${baseClasses} ${textOnly ? textOnlyClasses : defaultClasses} ${className || ''}`;

    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    );
}