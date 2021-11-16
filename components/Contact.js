import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    event.preventDefault();
    console.log(data);
    if (data) {
      //emailjs Credentials
      const serviceId = "service_f7tfxwg";
      const templateId = "template_aujzmzb";
      const userId = "user_MefJgoFxrZqf4SolpDGC7";

      emailjs
        .send(serviceId, templateId, data, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
    }
  };

  return (
    <section>
      <div className="relative z-10 px-5 lg: max-w-6xl mx-auto -mt-4">
        <h1 className=" font-semibold text-2xl">Get in touch!</h1>
        <p className="font-light text-base mt-2">
          Fill in the details and I will get back to you as soon as I can 🚀
        </p>

        <form
          className="form rounded-lg flex flex-col gap-y-4 pt-4 max-w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            label="Your Name"
            id="name"
            autoComplete="none"
            className="dark:bg-gray-100"
            variant="filled"
            error={errors.name}
            helperText={errors.name?.message}
            {...register("name")}
          />
          <TextField
            label="Email"
            id="email"
            variant="filled"
            error={errors.email}
            helperText={errors.email?.message}
            className="dark:bg-gray-100"
            {...register("email")}
          />
          <TextField
            label="Message"
            id="message"
            multiline
            rows={5}
            autoComplete="none"
            variant="filled"
            error={errors.message}
            helperText={errors.message?.message}
            className="dark:bg-gray-100"
            {...register("message")}
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            className="w-20"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
