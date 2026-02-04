import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormField {
  key: string;
  label: string;
  type: "text" | "email" | "number" | "textarea" | "select" | "date";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

interface FormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  fields: FormField[];
  values: Record<string, any>;
  onChange: (key: string, value: any) => void;
  onSubmit: () => void;
  submitLabel?: string;
  isLoading?: boolean;
}

export function FormDialog({
  open,
  onOpenChange,
  title,
  fields,
  values,
  onChange,
  onSubmit,
  submitLabel = "Save",
  isLoading = false,
}: FormDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.key} className="space-y-2">
              <Label htmlFor={field.key}>
                {field.label}
                {field.required && (
                  <span className="text-destructive ml-1">*</span>
                )}
              </Label>
              {field.type === "textarea" ? (
                <Textarea
                  id={field.key}
                  value={values[field.key] || ""}
                  onChange={(e) => onChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              ) : field.type === "select" ? (
                <Select
                  value={values[field.key] || ""}
                  onValueChange={(value) => onChange(field.key, value)}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={field.placeholder || `Select ${field.label}`}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  id={field.key}
                  type={field.type}
                  value={values[field.key] || ""}
                  onChange={(e) =>
                    onChange(
                      field.key,
                      field.type === "number"
                        ? Number(e.target.value)
                        : e.target.value,
                    )
                  }
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}
            </div>
          ))}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : submitLabel}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
