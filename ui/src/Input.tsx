import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

type Props = {
    name: string,
    id: string
}

function Input({ name, id }: Props) {
    return (
        <FloatingLabel label={"Enter a " + name} controlId={id}>
            <Form.Control required type="text" name={name} placeholder={"Enter a " + name} />
        </FloatingLabel>
    );
}

export default Input;