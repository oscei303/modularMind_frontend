import React from 'react';
import { Form, Button } from 'semantic-ui-react'


class form extends React.Component {

  render(){
    console.log(this.props)
    return (
      <div>
         <h3>NEW MODULE </h3>
          <Form>
            <Form.Field>
              <label>Name:  </label>
              <input
               name="name"
               onChange={this.props.onChange}
               placeholder=""
               />
            </Form.Field>
            <Form.Field >
              <label>Function: </label>
                 <select name="function" onChange={this.props.onChange}>
                    <option>-                   </option>
                    <option>Drums</option>
                    <option>Mixer</option>
                    <option>VCA</option>
                    <option>Oscillator</option>
                    <option>Modulation</option>
                    <option>Utility</option>
                    <option>Effect</option>
                    <option>Video</option>
                    <option>Clock</option>
                    <option>Multiplier</option>
                    <option>Switch</option>
                    <option>Filter</option>
                    <option>Amp</option>
                </select>
               </Form.Field>
              <Form.Field>
                <label>Company:</label>
                <input
                  name="company"
                  onChange={this.props.onChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Image: </label>
                <input 
                  placeholder="url"
                  name="img"
                  onChange={this.props.onChange}
                  />
            </Form.Field>
            <Button 
            type='submit'
            onClick={this.props.newModule}
            > Submit</Button>
          </Form>
          <br/>
      </div>
    )
  }
}

export default form;