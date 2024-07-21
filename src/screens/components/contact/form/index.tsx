import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, Label, Col, Form, FormGroup, Row } from "reactstrap";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const isFormValid =
    watch("name") && watch("email") && watch("message") && !errors.email;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="recruiterName">Nombre</Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Ingrese un nombre válido" }}
              defaultValue=""
              render={({ field: { ref, ...params } }) => (
                <Input
                  {...params}
                  innerRef={ref}
                  type="text"
                  placeholder="Tu nombre"
                />
              )}
            />
            {errors.name && (
              <span className="text-danger">Ingrese un nombre valido</span>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="recruiterEmail">Email</Label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Ingrese un email válido",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ingrese un email válido",
                },
              }}
              defaultValue=""
              render={({ field: { ref, ...params } }) => (
                <Input
                  {...params}
                  innerRef={ref}
                  type="email"
                  placeholder="Email"
                />
              )}
            />
            {errors.email && (
              <span className="text-danger">Ingrese un email valido</span>
            )}
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="recruiterMessage">Mensaje</Label>
        <Controller
          name="message"
          control={control}
          rules={{ required: "Este campo es necesario" }}
          defaultValue=""
          render={({ field: { ref, ...params } }) => (
            <Input {...params} innerRef={ref} type="textarea" />
          )}
        />
        {errors.email && (
          <span className="text-danger">Este cammpo es necesario</span>
        )}
      </FormGroup>
      <button type="submit" disabled={!isFormValid} className="btn btn-primary m-auto w-100 mt-3">
        Enviar
      </button>
    </Form>
  );
};

export default ContactForm;
