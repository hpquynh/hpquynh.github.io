// @flow
import React from 'react';
import { connect } from 'react-redux';
import { getProject } from '../../actions/projectAction';
import { getSelectedProject } from '../../selectors/project';
import ProjectDetailComponent from '../../components/Project/ProjectDetail';
import { Project } from '../../models/project';

type Props = {
  project: Project,
  match: Object,
}

class ProjectDetailContainer extends React.PureComponent<Props> {
  componentDidMount() {
    const { match, getProject } = this.props;
    getProject(match.params.id);
  }

  render() {
    const { project } = this.props;
    return (
      <ProjectDetailComponent project={project} />
    );
  }
}
export default connect(getSelectedProject, { getProject })(ProjectDetailContainer);
