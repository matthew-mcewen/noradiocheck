export default function Home() {
    return (
        <>
            <Content/>
            <Footer/>
        </>
    );
}

export function Content() {
    return (
        <div className={"flex flex-col gap-3 container mx-auto py-3 lg:py-9 font-sans"}>
            <h1 className={"text-7xl md:text-8xl lg:text-9xl lowercase tracking-wider font-light"}>
                No "radio check"
            </h1>
            <p className={"text-xl lowercase tracking-wider text-black/70 dark:text-white/70"}>
                please don't make "radio check" your first call
            </p>
            <a href={"#nb"} className={"text-xs tracking-wide hover:underline decoration-dashed font-medium"}>Flight simulation purposes only. Ask a qualified instructor for actual advice about flying.</a>
            <div className={"grid md:grid-cols-2 gap-3 lg:gap-6 my-3 lg:my-6 xl:my-9"}>
                <div className={"flex flex-col gap-1.5 w-fit"}>
                    <h2 className={"text-3xl px-2"}>Please, don't do this:</h2>
                    <div className={"p-4 text-sm lg:text-base flex flex-col gap-1.5 lg:gap-3 w-fit rounded-lg bg-white dark:bg-stone-900 shadow-2xl max-w-[520px]"}>
                        <div className={"flex flex-row items-center gap-3"}>
                            <span className={"text-3xl"}>
                                🧑‍✈️
                            </span>
                            <p>
                                Anytown Tower, ABC123, request radio check?
                            </p>
                        </div>
                        <div className={"flex flex-row items-center gap-3"}>
                            <span className={"text-3xl"}>
                                👷
                            </span>
                            <p>
                                ABC123, loud &amp; clear.
                            </p>
                        </div>
                        <div className={"flex flex-row items-center gap-3"}>
                            <span className={"text-3xl"}>
                                🧑‍✈️
                            </span>
                            <p>
                                Anytown Tower, ABC123, request clearance to Donlon
                            </p>
                        </div>
                        <div className={"flex flex-row items-center gap-3"}>
                            <span className={"text-3xl"}>
                                👷
                            </span>
                            <p>
                                &hellip; 🙄🙄
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"my-auto flex flex-col gap-2 text-sm"}>
                    <p>
                        Notice how our pilot friend here could've gone straight to the request? Getting straight to the point
                        would've saved a juicy chunk of time for everyone else sharing that radio channel as well.
                    </p>
                    <p>
                        It might feel harmless, and in the best case scenario, it might be.
                    </p>
                    <p>
                        Often, it's not; it's a painful inconvenience when the radio channel is shared between dozens or more stations at once.
                        So, even if you think you're being polite (or whyever else), it's a bit inconsiderate, and it's an example
                        of poor radio etiquette.
                    </p>
                    <p className={"font-medium text-base"}>
                        Just state your request! 🙏🥺
                    </p>
                </div>
            </div>
            <div className={"grid md:grid-cols-2 gap-3 lg:gap-6 my-3 lg:my-6 xl:my-9"}>
                <div className={"flex flex-col gap-1.5 w-fit"}>
                    <h2 className={"text-3xl px-2"}>Instead, try this:</h2>
                    <div className={"p-4 text-sm lg:text-base flex flex-col gap-1.5 lg:gap-3 w-fit rounded-lg bg-white dark:bg-stone-900 shadow-2xl max-w-[520px]"}>
                        <div className={"flex flex-row items-center gap-3 text-wrap"}>
                            <span className={"text-3xl"}>
                                🧑‍✈️
                            </span>
                            <p className={"text-wrap"}>
                                Anytown Tower, ABC123, received ATIS bravo, request clearance.
                            </p>
                        </div>
                        <div className={"flex flex-row items-center gap-3"}>
                            <span className={"text-3xl"}>
                                👷
                            </span>
                            <p>
                                ABC123, Anytown Tower, cleared to Donlon via flight planned route&hellip;
                            </p>
                        </div>
                        <div className={"flex flex-row items-center gap-3"}>
                            <span className={"text-3xl"}>
                                🧑‍✈️
                            </span>
                            <p>
                                😊🛫
                            </p>
                        </div>
                        <div className={"flex flex-row items-center gap-3"}>
                            <span className={"text-3xl"}>
                                👷
                            </span>
                            <p>
                                👍🫡
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"my-auto flex flex-col gap-3 text-sm"}>
                    <p>
                        If you really ought to cold call (perhaps if you're in an unusual spot), you could just announce with callsign only.
                        That gives the other side a chance to reply after much fewer syllables, seconds, and attention.
                    </p>
                    <p>
                        Really, being more deliberate &amp; thoughtful about the contents of your radio calls in advance will go a long way,
                        and it will definitely be noticed by the receiving side &mdash; perhaps a lot more than you might realise!
                    </p>
                    <p className={"text-base"}>
                        <span className={"font-medium"}>Super duper! </span>
                        Valuable time is spared and everyone's happier! 🎉
                    </p>
                </div>
            </div>
            <div className={"my-9 flex flex-col gap-2"}>
                <h2 className={"text-3xl px-2"}>
                    So&hellip; never make a radio check?
                </h2>
                <p>
                    Not quite. A radio check is a useful solution, despite being massively overused. Here are a few scenarios where you
                    probably should make a "radio check" call:
                </p>
                <ol className={"px-3"}>
                    <li>
                        <span className={"mx-2 font-bold"}>1. </span>
                        Recipient says your calls are unreadable/quiet/etc
                    </li>
                    <li>
                        <span className={"mx-2 font-bold"}>2. </span>
                        Your earlier calls didn't get any answer (and the reason isn't obvious)
                    </li>
                    <li>
                        <span className={"mx-2 font-bold"}>3. </span>
                        You've been rectifying an audio/comms issue, and want confirmation it's fixed
                    </li>
                </ol>
            </div>
        </div>
    )
}

export function Footer() {
    return (
        <div className={"container mx-auto flex flex-col gap-1.5 text-sm font-sans md:py-3 lg:py-6 xl:py-9"}>
            <p>
                This is only half serious, please don't get too mad at whoever sent you this 👀
            </p>
            <p>
                That said, if you see someone with this in their status/bio, prepare for them to be unenthused &amp; unimpressed by hearing "radio check!"
            </p>
            <p>
                Inspired largely by <a href={"https://nohello.net"} className={"hover:underline decoration-dashed font-medium"}>nohello.net</a>,
                and open-source on <a href={"https://github.com/noradiocheck"} className={"hover:underline decoration-dashed font-medium"}>GitHub</a>.
            </p>
            <p id={"nb"}>
                NB: This page is written about online flight simulation. It should go without saying: take flying advice from qualified instructors, not from a random web page.
            </p>
        </div>
    )
}