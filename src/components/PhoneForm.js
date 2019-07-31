import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class PhoneForm extends Component {
    static defaultProps = {
        onCreate: () => {console.log('onCreate method is undefined');},
    };

    handleSubmit = (e) => {
        const name = document.getElementById('username').value;
        const phone = document.getElementById('phone-number').value;

        this.props.onCreate({
            name: name,
            phone: phone,
        });

        e.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id="username"
                    label="이름이 뭐에요"
                    placeholder='이름'
                    onChange={this.handleChange}
                    margin="normal"
                /><br/>

                <TextField
                    id="phone-number"
                    label="전화번호 뭐에요"
                    placeholder='번호'
                    onChange={this.handleChange}
                    margin="normal"
                /><br/>

                <Button href="#" variant="outlined" type="submit">
                    내 맘 속에 저장!
                </Button>
            </form>
        );
    }
}

export default PhoneForm;