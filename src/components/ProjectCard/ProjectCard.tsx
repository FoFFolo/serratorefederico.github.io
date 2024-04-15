type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
    cardWidth: number | undefined;
}

export default function ProjectCard({ title, description, link, cardWidth }: ProjectCardProps) {
    return (
        <div className={`projectcard`} style={{ width: !cardWidth ? 'auto' : `${cardWidth}px` }}>
            <img src={`./images/ProjectCard_Images/${title}.png`} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "./images/ProjectCard_Images/default.png";
            }} className="h-32 object-contain object-center select-none
                            justify-self-center" />
            <div className="h-56 flex flex-col justify-between text-center">
                <div className="projectcard__description">
                    <h3 className='text-xl font-bold mb-2'>{title}</h3>
                    <div id="scroll-style" className="max-h-36 py-2 px-1 text-sm text-gray-700">
                        <span>{description}</span>
                    </div>
                </div>
                <a className="self-center text-black text-center
                             py-2 px-7 rounded-md select-none text-xl
                             border border-solid border-transparent
                             transition-colors ease duration-300
                             bg-yellow-300 hover:bg-yellow-400"
                    href={link}>Visit</a>
            </div>
        </div>
    )
}