import { useState, useEffect} from "react";
import { IContent } from "../types/types";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";


export function useContent(target: "series" | "films") {
    const [content, setContent] = useState<IContent[]>([])
    useEffect(() => {
           const q = query(collection(db, target))
            getDocs(q)
           .then(snapshot => {
           const allContent: any = snapshot.docs.map((doc) => ({
                ...doc.data()
           }))

           setContent(allContent)
        })
        .catch((error: Error) => {
            console.log(error.message)
        })
    }, [target])

    return { [target]: content }
}