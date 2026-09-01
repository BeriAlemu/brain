


function Section({
    className,
    id,
    crosses,
    crossesOffset,
    customPaddings,
    children
}) {
    return ( 
        <div className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20 
        ${crosses ? 'lg:py-32 xl:py-40':''} 
        ${className || ""}`}`}>
            Section
        </div>
     );
}

export default Section;