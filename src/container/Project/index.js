// @flow
import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { selector } from '../../selectors/project';
import ProjectComponent from '../../components/Project';
import { getProjects } from '../../actions/projectAction';

type Props = {
  projects: [],
  getProjects: () => {},
  match: Object,
}

class ProjectContainer extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects, match } = this.props;
    return (
      <ProjectComponent projects={projects} match={match} />
    );
  }
}
export default compose(
  withRouter,
  connect(selector, { getProjects }),
)(ProjectContainer);
