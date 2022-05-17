export default function Container({ children, className, zIndex = "unset" }) {
    return (
        <>
            <style jsx global>{`
                .container {
                    width: 100%;
                    position: relative;
                    max-width: 2500px;
                    margin: 0 auto;
                    padding: 0 10px;
                    z-index: ${zIndex};
                }
            `}</style>

            <div className={`container ${className ? className : ""}`}>{children}</div>
        </>
    );
}
