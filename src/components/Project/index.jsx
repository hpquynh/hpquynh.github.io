// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getProjects } from '../../actions/projectAction';
import { selector } from '../../selectors/project';
import { Container } from '../common/style';
import { ProjectList } from './style';
import Navigation from '../Navigation';
import ProjectItem from './ProjectItem';


type Props = {
  projects: [],
  getProjects: () => {},
}
class ProjectComponent extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props;
    if (!this.props || projects === undefined) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <Container>
        <Navigation />
        <ProjectList>
          {
            projects.map(project => (
              <ProjectItem key={project.id} project={project} />
            ))
          }

        </ProjectList>
      </Container>
    );
  }
}

// function mapStateToProps(state) {
//   return state.project;
// }

export default withRouter(connect(selector, {
  getProjects,
})(ProjectComponent));
