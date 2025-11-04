import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next"; // <-- Import the hook
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Send } from "lucide-react";

type FormData = z.infer<ReturnType<typeof getFormSchema>>;

// Factory function to create the schema with translations
const getFormSchema = (t: (key: string) => string) => z.object({
  name: z.string().trim().min(2, t("enquiry_form_section.validation.name_min")).max(100, t("enquiry_form_section.validation.name_max")),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, t("enquiry_form_section.validation.phone_invalid")),
  email: z.string().trim().email(t("enquiry_form_section.validation.email_invalid")).max(255, t("enquiry_form_section.validation.email_max")),
  location: z.string().trim().min(2, t("enquiry_form_section.validation.location_min")).max(200, t("enquiry_form_section.validation.location_max")),
  message: z.string().trim().min(10, t("enquiry_form_section.validation.message_min")).max(1000, t("enquiry_form_section.validation.message_max"))
});

const EnquiryForm = () => {
  const { t } = useTranslation(); // <-- Initialize the hook
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = getFormSchema(t);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    
    toast.success(t("enquiry_form_section.toast.success_title"), {
      description: t("enquiry_form_section.toast.success_description")
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="enquiry" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md-text-5xl font-bold text-foreground mb-4">
            {t("enquiry_form_section.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("enquiry_form_section.subtitle")}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-lg animate-scale-in">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("enquiry_form_section.fields.name.label")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("enquiry_form_section.fields.name.placeholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("enquiry_form_section.fields.phone.label")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("enquiry_form_section.fields.phone.placeholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("enquiry_form_section.fields.email.label")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("enquiry_form_section.fields.email.placeholder")} type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("enquiry_form_section.fields.location.label")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("enquiry_form_section.fields.location.placeholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("enquiry_form_section.fields.message.label")}</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t("enquiry_form_section.fields.message.placeholder")}
                      className="min-h-32 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("enquiry_form_section.button.sending") : t("enquiry_form_section.button.send")}
              {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default EnquiryForm;