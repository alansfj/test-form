import AddressForm from "./components/AddressForm";
import BankForm from "./components/BankForm";
import BasicInfoForm from "./components/BasicInfoForm";
import BeneficiaryForm from "./components/BeneficiaryForm";
import FormContainer from "./components/FormContainer";
import LegalRepresentativeForm from "./components/LegalRepresentativeForm";

function App() {
  return (
    <div>
      <FormContainer formTitle="Información Básica">
        <BasicInfoForm />
      </FormContainer>
      <FormContainer formTitle="Domicilio">
        <AddressForm />
      </FormContainer>
      <FormContainer formTitle="Representante Legal">
        <LegalRepresentativeForm />
      </FormContainer>
      <FormContainer formTitle="Información Bancaria">
        <BankForm />
      </FormContainer>
      <FormContainer formTitle="Beneficiario">
        <BeneficiaryForm />
      </FormContainer>
    </div>
  );
}

export default App;
