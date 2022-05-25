import asset from "@/plugins/assets/asset";
function Input() {
    return (
        <>
            <form className="Input">
                <input className="txMain normal" type="text" placeholder="Enter your email..." />
                <button>
                    <img src={asset("/images/icons/sendfooter.svg")} alt="" />
                </button>
            </form>
            <style jsx>{`
                .Input {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    border-radius: 15px;
                    padding: 8px 20px;
                    transition: ease 0.3s;
                    border: 1px solid #fff;
                    input {
                        color: #000;
                        outline: none;
                        border: none;
                        padding: 10px 0;
                        font-size: 16px;
                        width: 100%;
                        transition: ease 0.3s;
                    }
                    button {
                        cursor: pointer;
                        outline: none;
                        border: none;
                        background-color: transparent;
                        width: 55px;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img {
                            --valueIcon: 24px;
                            width: var(--valueIcon);
                            height: var(--valueIcon);
                            max-width: initial;
                            transition: ease-in 0.3s;
                        }
                        &:hover {
                            img {
                                --valueIcon: 26px;
                                transition: ease-in 0.3s;
                            }
                        }
                    }
                    &:focus-within {
                        border: 0.5px solid #e71882;
                        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.11);
                        transition: ease 0.3s;
                        input::placeholder {
                            opacity: 0;
                            transition: ease 0.3s;
                        }
                    }
                }

                @media (max-width: 1024px) {
                    .Input {
                        padding: 5px 18px;
                        input {
                            font-size: 14px;
                        }
                        button {
                            width: 40px;
                            height: 35px;
                            img {
                                --valueIcon: 20px;
                            }
                            &:hover {
                                img {
                                    --valueIcon: 22px;
                                    transition: ease-in 0.3s;
                                }
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default Input;
