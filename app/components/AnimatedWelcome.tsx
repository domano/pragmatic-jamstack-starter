import { Transition } from '@headlessui/react'
import Welcome from "./Welcome";



export default function AnimatedWelcome() {
    return <Transition
        show={true}
        appear={true} // Animate on initial mount?
        enter="transition transform-gpu duration-500"
        enterFrom="transform-gpu opacity-0 translate-y-20"
        enterTo="transform-gpu opacity-100 translate-y-0 "
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
    >
        <Welcome/>
    </Transition>;
}