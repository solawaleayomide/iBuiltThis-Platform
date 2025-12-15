"use client";
import { Loader2Icon, SparkleIcon } from "lucide-react";
import { FormField } from "../forms/form-field";
import { Button } from "../ui/button";
import { addProductAction } from "@/lib/products/product-action";
import { useActionState } from "react";

const initialState = {
  succes: false,
  error: {},
  message: "",
};

type FormState = {
  success: boolean;
  error?: Record<string, string[]>;
  message: string;
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState<FormState>(
    addProductAction,
    initialState
  );

  console.log(state);

  // const handleSubmit = async (formData: FormData) => {
  //   await addProduct(formData);
  // };

  return (
    <form className="space-y-6 flex flex-col gap-2" action={formAction}>
      <FormField
        label="ProductName"
        name="name"
        id="name"
        placeholder="My Awesome Product"
        required
        onChange={() => {}}
        error=""
      />
      <FormField
        label="Slug"
        name="slug"
        id="slug"
        placeholder="my-awesome-product"
        required
        onChange={() => {}}
        error=""
        helperText="URL-friendly version of your product name"
      />
      <FormField
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="A brief, catchy description"
        required
        onChange={() => {}}
        error=" "
      />

      <FormField
        label="Description"
        name="description"
        id="description"
        placeholder="Tell us more about your product..."
        required
        onChange={() => {}}
        error=""
        textarea
      />

      <FormField
        label="Website URL"
        name="websiteUrl"
        id="websiteUrl"
        placeholder="https://yourproduct.com"
        required
        onChange={() => {}}
        error=" "
        helperText="Enter your product's website or landing page"
      />
      <FormField
        label="Tags"
        name="tags"
        id="tags"
        placeholder="AI, Productivity, SaaS"
        required
        onChange={() => {}}
        error=" "
        helperText="Comma-separated tags (e.g., AI, SaaS, Productivity)"
      />
      <Button type="submit">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            {" "}
            <SparkleIcon className="size-4" /> Submit Product
          </>
        )}
      </Button>
    </form>
  );
}
