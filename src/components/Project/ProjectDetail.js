// @flow
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
import { Container } from '../common/style';
import { getProject } from '../../actions/projectAction';
import { getSelectedProject } from '../../selectors/project';
import Navigation from '../common/Navigation';
import { Project } from '../../models/project';
import { displayFlex, fontSize } from '../../styles/utils';
import { IconMobile, IconPc, IconBack } from '../../styles/icons';
import Loading from '../common/Loading';

const MainContent = styled.div`
  ${displayFlex('row', 'flex-start', 'center')}
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => props.theme.color.mist};
  z-index: -1;
`;
const Preview = styled.div`
  ${displayFlex('row', 'center', 'center')}
  width: 65vw;
  height: 100%;
  background-color: ${props => props.theme.color.mist};
  z-index: 1;
  box-sizing: border-box;
  padding: 71px 60px;
  overflow: hidden;
`;
const PreviewImg = styled.img`
  width: 70%;
  max-height: 100%;
  height: auto;
  text-align: center;
  object-fit: contain;
  object-position: center;
`;
const Detail = styled.div`
  color: white;
  width: 35vw;
  height: 100%;
  padding: 71px 30px 30px;
  box-sizing: border-box;
  //background-color: ${props => props.theme.color.darker};
  position: relative;
  z-index: 2;
  transition: padding .7s ease;
  &:before{
    content: '';
    z-index: -1;
    position: absolute; top: 0; left: -30px; right: 0; bottom: 0;
    background-color: ${props => props.theme.color.darker};
    transform: translate3d(24px,0px,41px) skew(-3deg,0);
    outline: 1px solid transparent;
    box-shadow: 0 0 1px rgba(255,255,255,0);
    -webkit-backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    -webkit-perspective: 1000;
    transition: all .7s ease;
  }
  &:hover{
    &:before{
      transform: translate3d(0px,0px,0px) skew(0,0);
     }
     padding-left: 15px;
   }

`;
const Title = styled.h1`
  ${fontSize('24px')}
  margin: 0 0 5px 0;
  padding: 0;
  font-weight: 500;
  text-align: center;
`;
const Description = styled.p`
  ${fontSize('14px')}
  margin: 5px 0 0 0;
  font-family: ${props => props.theme.font.second};
  font-weight: 400;
`;
const InfoGroup = styled.div`
  text-align: center;
   ${displayFlex('column wrap', 'center', 'center')}
  
`;
const Environments = styled.span`
  text-align: center;
  svg{
   margin: 0 5px;
  }
`;
const Sources = styled.span`
 ${fontSize('14px')}
 span{
    &:not(:first-of-type){
      &:before{
        content: '|';
        
      }
    }
  }
`;
const Links = styled.ul`
  padding-left: 10px;
  a{
    text-decoration: underline;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Grid = styled.div`
  height: 100%;
  max-height: 120px;
`;
const GridImage = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.color.mist};
  background-color: ${props => props.theme.color.mist};
  object-fit: contain;
  object-position: center;
  filter: grayscale(90%);
  transition: all .3s ease;
  &:hover{
    cursor: pointer;
    filter: none;
  }
`;
const BottomFixed = styled.div`
  position: fixed;
  bottom: 15px;
  top: auto;
  left: 15px;
  right: auto;
  z-index: 1;
  a{
     ${displayFlex('row', 'center', 'center')}
     span{
      margin-left: 10px;
     }
  }
`;

type Props = {
  project: Project,
  match: Object,
  getProject: Function,
}

class ProjectDetailComponent extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { match, getProject } = this.props;
    getProject(match.params.id);
  }

  handleClick = (url) => {
    this.setState({
      currentUrl: url,
    });
  }

  render() {
    const { project } = this.props;
    const { currentUrl } = this.state;
    return (
      <Container>
        <Navigation />
        {
          (!this.props || project === undefined) ? <Loading />
            : (
              <MainContent>
                <Preview>
                  <PreviewImg src={currentUrl || project.images[0].url} alt="preview" />
                </Preview>
                <Detail>
                  <Title>{project.name}</Title>
                  <InfoGroup>
                    <Environments>
                      {
                        project.environments.map((en) => {
                          if (en === 'pc') {
                            return <IconPc key={en} />;
                          } if (en === 'mobile') {
                            return <IconMobile key={en} />;
                          }
                          return null;
                        })
                      }
                    </Environments>
                    <Sources>
                      {
                        project.sources.map(source => <span key={source}>{_.capitalize(source)}</span> || null)
                      }
                    </Sources>
                  </InfoGroup>
                  <Description>{project.description}</Description>
                  <Links>
                    {
                      project.links ? project.links.map(link => <li key={link}><Link target="_blank" to={`//${link}`}>{link}</Link></li> || null) : ''
                    }
                  </Links>
                  <GridContainer>
                    {
                      project.images.map((image, index) => (<Grid onClick={() => this.handleClick(image.url)} key={index}><GridImage src={image.url} alt={image.description} /></Grid> || null))
                    }
                  </GridContainer>
                </Detail>
                <BottomFixed>
                  <Link to="/project">
                    <IconBack />
                    <span>My works</span>
                  </Link>
                </BottomFixed>
              </MainContent>
            )
        }
      </Container>
    );
  }
}

export default compose(
  withRouter,
  connect(getSelectedProject, { getProject }),
)(ProjectDetailComponent);
