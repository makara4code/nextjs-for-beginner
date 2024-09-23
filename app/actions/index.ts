import { redirect } from "next/navigation";

export async function login(email: string, password: string) {
    const res = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const json = await res.json();

    if (!res.ok) {
        return { message: json.errors }
    }

    redirect("/dashboard");
}