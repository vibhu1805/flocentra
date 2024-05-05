"use client"
import { Button } from "@/components/ui/button";
import { SignInButton, useSession, SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import {Bestpart} from "@/components/ui/Bestpart";
import { useMutation,useQuery } from "convex/react";
import {Commit} from "@/components/ui/commit";
import { api } from "../../convex/_generated/api";
import 'bootstrap/dist/css/bootstrap.css';
export default function Home(){
  const getFiles =useQuery(api.files.getFiles);
  const createFile= useMutation(api.files.createFile);
  return (
    <main className="pt-5 mt-5">
      <Bestpart/>
      <Commit/>
    </main>
  );
}
    /*  {getFiles?.map((file)=>{
          return <div key={file._id}>{file.name}</div>
        })}
      <Button 
      onClick={()=>{
        createFile({
          name:"hello world",
        });
      }}
      >
        Click Me
      </Button>*/