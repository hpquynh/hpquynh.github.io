// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage, FieldArray,
} from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  CheckboxGroup, InputGroup, ButtonGroup, Button, InputStyle, FormStyle, CustomMessage, ButtonIcon,
} from '../common/Form';
import { Checkbox } from '../common/Checkbox';
import { displayFlex } from '../../styles/utils';
import { createProject } from '../../actions/projectAction';
import { getSelectedProject } from '../../selectors/project';

const ProjectEditorSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .max(120, 'Too Long!'),
  links: Yup.array()
    .required('Required'),
  thumbnail: Yup.string()
    .required('Required'),
});

const Input = styled(Field).attrs({
  type: 'text',
})`
  ${InputStyle}
`;
const CustomForm = styled(Form)`
  ${FormStyle}
`;
const DynamicGroup = styled.div`
  margin-bottom: 10px;
`;
const Row = styled.div`
  display: flex;
`;
const DefaultLink = styled(Link)`
   background-color: ${props => props.theme.color.dark};
   ${displayFlex('row', 'center', 'center')}
  color: ${props => props.theme.color.white};
  border-color: ${props => props.theme.color.dark};
  text-align: center;
  width: auto;
  height: 32px;
  box-sizing: border-box;
  padding: 15px;
`;
type Props = {
  properties: Object,
  createProject: Function,
}

class ProjectEditorForm extends React.PureComponent<Props> {
  render() {
    const { properties } = this.props;
    return (
      <Formik
        validationSchema={ProjectEditorSchema}
        initialValues={{
          environments: [properties.environments[0]],
          types: [properties.types[0]],
          sources: [properties.sources[0]],
          links: [''],
          images: [{ description: '', url: '' }],
          thumbnail: '',
          name: '',
          description: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          this.props.createProject(values);
          actions.resetForm();
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
          } = props;
          return (
            <CustomForm className="vertical">
              <InputGroup>
                <label>New project</label>
                <Input
                  type="text"
                  name="name"
                  className={
                    errors.name && touched.name ? 'error' : ''
                  }
                />
                <ErrorMessage name="name" render={msg => <CustomMessage>{msg}</CustomMessage>} />
              </InputGroup>
              <InputGroup>
                <label>Description</label>
                <Input type="text" name="description" />
                <ErrorMessage name="description" render={msg => <CustomMessage>{msg}</CustomMessage>} />
              </InputGroup>
              <InputGroup>
                <label>Thumbnail</label>
                <Input
                  type="text"
                  name="thumbnail"
                  className={
                  errors.thumbnail && touched.thumbnail ? 'error' : ''
                }
                />
                <ErrorMessage name="thumbnail" render={msg => <CustomMessage>{msg}</CustomMessage>} />
              </InputGroup>
              <InputGroup>
                <label>Project Links</label>
                <FieldArray
                  name="links"
                  render={({ remove, push }) => (
                    <InputGroup>
                      {values.links.length > 0
                      && values.links.map((link, index) => (
                        <DynamicGroup key={index}>
                          <Row>
                            <Input
                              name={`links.${index}`}
                              type="text"
                            />
                            <ButtonIcon
                              type="button"
                              onClick={() => remove(index)}
                            >
                              x
                            </ButtonIcon>
                          </Row>
                          <ErrorMessage name={`links.${index}`} render={msg => <CustomMessage>{msg}</CustomMessage>} />
                        </DynamicGroup>
                      ))}
                      <Button
                        type="button"
                        className="secondary"
                        onClick={() => push('')}
                      >
                        Add Link
                      </Button>
                    </InputGroup>
                  )}
                />
              </InputGroup>
              <InputGroup>
                <label>Project Images</label>
                <FieldArray
                  name="images"
                  render={({ remove, push }) => (
                    <InputGroup>
                      {values.images.length > 0
                      && values.images.map((image, index) => (
                        <DynamicGroup key={index}>
                          <Row>
                            <InputGroup>
                              <Input
                                name={`images.${index}.description`}
                                type="text"
                                placeholder="Description"
                              />
                              <Input
                                name={`images.${index}.url`}
                                type="text"
                                placeholder="Url"
                              />
                            </InputGroup>
                            <ButtonIcon
                              type="button"
                              onClick={() => remove(index)}
                            >
                              x
                            </ButtonIcon>
                          </Row>
                        </DynamicGroup>
                      ))}
                      <Button
                        type="button"
                        className="secondary"
                        onClick={() => push({ description: '', url: '' })}
                      >
                        Add image
                      </Button>
                    </InputGroup>
                  )}
                />
              </InputGroup>
              <InputGroup>
                <label>Environments</label>
                <CheckboxGroup>
                  {
                    properties.environments.map((env, i) => (
                      <Checkbox key={`env_${i}`} name="environments" value={env} />
                    ))
                  }
                </CheckboxGroup>
              </InputGroup>
              <InputGroup>
                <label>Types</label>
                <CheckboxGroup>
                  {
                    properties.types.map((type, i) => (
                      <Checkbox key={`type_${i}`} name="types" value={type} />
                    ))
                  }
                </CheckboxGroup>
              </InputGroup>
              <InputGroup>
                <label>Sources</label>
                <CheckboxGroup>
                  {
                    properties.sources.map((source, i) => (
                      <Checkbox key={`source_${i}`} name="sources" value={source} />
                    ))
                  }
                </CheckboxGroup>
              </InputGroup>
              <ButtonGroup>
                <DefaultLink to="/project">
                  Cancel
                </DefaultLink>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </ButtonGroup>
            </CustomForm>
          );
        }}
      </Formik>
    );
  }
}

export default compose(
  withRouter,
  connect(getSelectedProject, { createProject }),
)(ProjectEditorForm);
