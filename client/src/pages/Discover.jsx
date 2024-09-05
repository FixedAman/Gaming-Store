import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Discover.css';

const Discover = () => {
  return (
    <>
      {/* First Section */}
      <div className="discover-containerp1 border-zinc-800 gap-10">
        <video autoPlay loop muted className="codbackground-video">
          <source src="/videos/codloop.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <h1>EXPLORE THE HUB</h1>
          <h2><br />EVENTS<br /></h2>
          <Container>
            <Row className="justify-content-md-center">
              <Col md={4} className="mb-5">
                <Card>
                  <Card.Img variant="top" src="https://r4.wallpaperflare.com/wallpaper/893/980/964/video-games-call-of-duty-black-ops-iiii-call-of-duty-black-ops-call-of-duty-wallpaper-fa90d91bd188d8fe0b37e8c451d68daa.jpg" />
                  <Card.Body>
                    <Card.Title>BLACK OPS 6</Card.Title>
                    <Card.Text>
                      <h3>Live events at COD Black OPS 6 at COD NEXT event 8am EST</h3>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-5">
                <Card>
                  <Card.Img variant="top" src="https://r4.wallpaperflare.com/wallpaper/557/189/265/call-of-duty-warzone-xbox-one-call-of-duty-black-ops-hd-wallpaper-1940f83d917a5d8b5627e8cfa08116dd.jpg" />
                  <Card.Body>
                    <Card.Title>Warzone Season 3 Reloaded</Card.Title>
                    <Card.Text>
                      Rebirth Island is now live in COD Warzone 3.0
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-5">
                <Card>
                  <Card.Img variant="top" src="https://r4.wallpaperflare.com/wallpaper/597/295/782/call-of-duty-call-of-duty-modern-warfare-iii-simon-ghost-riley-zombies-call-of-duty-black-ops-cold-war-zombies-hd-wallpaper-7900f86da1ea5deb1617580f30e106fd.jpg" />
                  <Card.Body>
                    <Card.Title>Modern Warfare 3 Season 5</Card.Title>
                    <Card.Text>
                      Community Update from Modern Warfare 3
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Second Section */}
      <div className="discover-containerp2 border-2 border-zinc-800">
        <video autoPlay loop muted className="cyberpunkbackground-video">
          <source src="/videos/cyberpunk.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content2">
          <h1>Phantom Liberty</h1>
          <h2><br />Official updates rolled out<br /></h2>
          <Container>
            <Row className="justify-content-md-center">
              <Col md={4} className="mb-5">
                <Card>
                  <Card.Img variant="top" src="https://r4.wallpaperflare.com/wallpaper/929/501/218/cyberpunk-2077-cd-projekt-red-hd-wallpaper-c04a9ecd37adf42afded41bafb209c6f.jpg" />
                  <Card.Body>
                    <Card.Title>Plantom Liberty</Card.Title>
                    <Card.Text>
                      Ncpd is Now dont have access on this Location. find the Intel ASAP
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-5">
                <Card>
                  <Card.Img variant="top" src="https://r4.wallpaperflare.com/wallpaper/794/248/964/cyberpunk-cyberpunk-2077-cyberpunk-edgerunners-netflix-cd-projekt-red-hd-wallpaper-d896ad8890e00cf870cc418e585224da.jpg" />
                  <Card.Body>
                    <Card.Title>Cyberpunk Anime Adaptaion</Card.Title>
                    <Card.Text>
                      anime adaptation on Netflix only at 9.49$
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-5">
                <Card>
                  <Card.Img variant="top" src="https://r4.wallpaperflare.com/wallpaper/507/777/218/cyberpunk-2077-johnny-silverhand-keanu-reeves-video-game-characters-video-games-hd-wallpaper-19c0d86dc11a1d6bc6a7a81f60c1e67d.jpg" />
                  <Card.Body>
                    <Card.Title>Keanu Reeves</Card.Title>
                    <Card.Text>
                      Releasing on the EEE gamesCom at 24th july 4am pst+10 ETA
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Discover;
