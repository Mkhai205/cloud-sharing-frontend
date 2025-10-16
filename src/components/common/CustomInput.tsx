import { Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
    label: string;
    placeholder?: string;
    state: string;
    showPassword?: boolean;
    setShowPassword?: (show: boolean) => void;
    setState: (state: string) => void;
    autocomplete?: string;
};

export default function CustomInput({
    label,
    placeholder,
    state,
    setState,
    showPassword,
    setShowPassword,
    autocomplete,
}: Props) {
    const generateId = (label: string) => {
        return label.toLowerCase().replace(/\s+/g, "-");
    };

    return (
        <div className="group space-y-1">
            <Label
                htmlFor={generateId(label)}
                className="text-sm font-medium text-card-foreground font-sans"
            >
                {label}
            </Label>
            <div className="relative">
                <Input
                    required
                    id={generateId(label)}
                    type={showPassword === false ? "password" : "text"}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder={placeholder}
                    autoComplete={autocomplete}
                    className="px-3 py-4 rounded-lg backdrop-blur-sm border-2 hover:border-sky-300/60 group-hover:border-sky-300/60 focus:!border-sky-300 
                                            focus-visible:ring-0 transition-all duration-300 placeholder:text-slate-500 shadow-sm hover:shadow-md group-hover:shadow-md"
                />
                {showPassword !== undefined && setShowPassword !== undefined && (
                    <div
                        className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
                        ) : (
                            <Eye className="h-5 w-5 text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
