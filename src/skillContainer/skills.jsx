import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3, faGithub, faGitAlt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
library.add( faHtml5, faCss3, faJs, faGithub, faGitAlt, faCode, faReact )
function Skills(){

    return(
        <div className="border font-itim md:overflow-visible overflow-scroll flex flex-col bg-background px-5 py-[31.5px] md:h-[500px] h-[530px] md:my-14 border-black ">
            <div className="text-center">
                <h1 className='text-3xl'>Skills</h1>
                <p>My Technical Level</p>
            </div>
            
            <div className="border border-black md:h-[400px] md:w-full rounded-md text-center mx-auto my-10 px-8 pb-5">
                <h1 className='text-xl my-6'>Frontend Developer</h1>
                    <ul className="grid md:grid-cols-3 gap-5 md:text-3xl text-xl text-center">
                        <li><FontAwesomeIcon icon="fa-brands fa-html5" />HTML <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-css3" />CSS <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-js" />JavaScript <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-solid fa-code" />Tailwind css <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-git-alt" />Git <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-github" />Github <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-react" />React <hr className='border border-black w-1/2 mx-auto' /></li>
                    </ul>
            </div>
        </div>
    )
}

export default Skills