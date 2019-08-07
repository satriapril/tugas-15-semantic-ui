import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Container, Table,  Search, Label, Menu, Icon, Grid, Comment, Header, Form, Button, Feed } from "semantic-ui-react";

class App extends Component {
  render(){
    return(
      <div>
        <Container style={{marginTop:"3em"}}>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell  colSpan="3" textAlign="right">
                  <Search placeholder="Search document..."/>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">Nama Document</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar ReactJS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left"/>
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right"/>
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>

          <Grid>
            <Grid.Column floated="left" width={5}>
              <Comment.Group threaded>
                <Header as="h3" dividing>
                  Commentar
                </Header>

                <Comment>
                  <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"/>
                  <Comment.Content>
                    <Comment.Author as="a">Satria</Comment.Author>
                    <Comment.Metadata>
                      <span>Today at 5:42PM</span>
                    </Comment.Metadata>
                    <Comment.Text>Hallo...!</Comment.Text>
                    <Comment.Actions><a href="/">Reply</a></Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Comment>
                  <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
                  <Comment.Content>
                    <Comment.Author as="a">Danang</Comment.Author>
                    <Comment.Metadata>
                      <span>Todat at 5:50PM</span>
                    </Comment.Metadata>
                    <Comment.Text>Kerjakan Sesuatu Semampu Kamu...</Comment.Text>
                    <Comment.Actions><a href="/">Reply</a></Comment.Actions>
                  </Comment.Content>

                  <Comment.Group>
                    <Comment>
                      <Comment.Avatar as="a" src=" https://react.semantic-ui.com/images/avatar/small/jenny.jpg"/>
                      <Comment.Content>
                        <Comment.Author as="a">Ricky</Comment.Author>
                        <Comment.Metadata>
                          <span>just now</span>
                        </Comment.Metadata>
                        <Comment.Text>Kamu Sekarang Dimana Danang ?</Comment.Text>
                        <Comment.Actions><a href="/">Reply</a></Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                </Comment>

                <Comment>
                  <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"/>
                  <Comment.Content>
                    <Comment.Author as="a">Joe</Comment.Author>
                    <Comment.Metadata>
                      <span>1 days ago</span>
                    </Comment.Metadata>
                    <Comment.Text>Terimakasih Atas Nasihat Nya</Comment.Text>
                    <Comment.Actions><a href="/">Reply</a></Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Form reply>
                  <Form.TextArea/>
                  <Button content="Add Reply" labelPosition="left" icon="edit" primary/>
                </Form>
              </Comment.Group>
            </Grid.Column>

            <Grid.Column floated="right" width={5}>
              <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <img alt="pict user" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Elliot Fu</Feed.User> added you as friends
                      <Feed.Date>3 hours ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like"/>
                        4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label>
                    <Icon name="pencil"/>
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      You submitted a new post to the page
                      <Feed.Date>3 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                      Saya Senang Belajar Bahasa Pemrograman
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like"/>
                        11 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label>
                    <img alt="pict user" src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"/>
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Date>4 days ago</Feed.Date>
                    <Feed.Summary>
                      David added 2 new image
                    </Feed.Summary>
                    <Feed.Extra images>
                      <a href="/"> <img alt="pict comment" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"/> </a>
                      <a href="/"> <img alt="pict comment" src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png"/> </a>
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like"/>
                        2 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
