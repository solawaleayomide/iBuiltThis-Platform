import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface FormFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required: boolean;
  onChange: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
  error: string | null;
  helperText?: string;
  textarea?: boolean;
}

export const FormField = ({
  label,
  name,
  id,
  placeholder,
  required,
  onChange,
  error,
  helperText,
  textarea,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {textarea ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
          }
        />
      ) : (
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLInputElement>) => void
          }
        />
      )}

      {helperText && (
        <p className="text-muted-foreground text-xs">{helperText}</p>
      )}
      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
};
