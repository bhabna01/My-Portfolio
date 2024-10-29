import IconCloud from "../../@/components/ui/icon-cloud";

const slugs = [

    "javascript",

    "java",
    "react",

    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",

    "firebase",

    "vercel",


    "git",

    "github",
    "gitlab",


    "figma",
];

const Skills = () => {
    return (
        <div>
            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
                <IconCloud iconSlugs={slugs} />
            </div>
        </div>
    );
};

export default Skills;