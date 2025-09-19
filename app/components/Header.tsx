"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary gap-10 bg-"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto gap-5 mx-auto ">
              <Nav.Link eventKey={2} href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/theory" className="font-bold">
                FPS тоглоомын үндсэн онол
              </Nav.Link>
              <Nav.Link
                href="https://humanbenchmark.com/tests/reactiontime"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => router.push("/Reaction")}
              >
                Reaction Speed Test
              </Nav.Link>
              <Nav>
                <Nav.Link href="/skill">Ур Чадвар</Nav.Link>
              </Nav>
              <Nav.Link href="/facts" className="font-bold">
                Сонирхолтой баримтууд
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
