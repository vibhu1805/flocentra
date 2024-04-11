"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/ui/button";
import {
    SignedOut,
    SignInButton,
    SignedIn,
    SignOutButton,
} from "@clerk/clerk-react";
import * as logo from "./assets/Logo.jpg";
import "bootstrap/dist/css/bootstrap.css";
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    let menuClasses=[];
    useEffect(()=>{
        if(isOpen){
            menuClasses.push("flex");
        } else{
            menuClasses.push("hidden");
        }
    });


    return (
        <nav className="navbar navbar-expand-lg  fixed-top ">
            <div className="container-fluid text-center items-center mx-auto flex justify-between">
                <Link className="navbar-brand" href="/">
                    <Image src={logo} width="100" height="100" alt="Logo of Flocentra" />
                </Link>
                <div className={` ${isOpen ? "flex na" : "hidden"} flex-col md:flex-row xl:flex flex `} >
                    <Link href="/" className="mx-2 mt-1 nal ">
                        Home
                    </Link>
                    <Link href="/about" className=" mx-2 mt-1 nal">
                        About
                    </Link>
                    <Link href="/contact" className="mx-2 mt-1 nal">
                        Contact Us
                    </Link>
                    <Link href="/enquiry" className="mx-2 mt-1 nal">
                        Enquiry
                    </Link>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button className="mx-2">Sign In</Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <SignOutButton>
                            <Button>Sign Out</Button>
                        </SignOutButton>
                    </SignedIn>
                </div>

                <div className="md:hidden flex items-center xl:hidden flex ">
                    <button
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    // d="M32.033,29.19l15.55,-15.55l2.863,2.863l-15.55,15.55l15.55,15.55l-2.863,2.863l-15.55,-15.55l-15.55,15.55l-2.863,-2.863l15.55,-15.55l-15.55,-15.55l2.863,-2.863l15.55,15.55z"/>
                                    d='M6 18L18 6M6 6l12 12'></path>
                            ) : (
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
                                ></path>
                            )}
                        </svg>
                    </button>
                </div>
                

            </div>
        </nav >
    );
};
