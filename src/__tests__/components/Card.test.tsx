import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Card, Player } from "../../components";

const category = "series"
const slideRows = [
  {
    title: "Documentaries",
    data: [
      {
        genre: "documentaries",
        maturity: "18",
        slug: "tiger-king",
        description: "Tiger King description",
        id: "07adcf19-517f-41b4-8f8b-04fee694bce1",
        title: "Tiger King",
      },
    ],
  },
  {
    title: "Feel Good",
    data: [
      {
        title: "Juno",
        genre: "feel-good",
        description: "Juno description",
        maturity: "0",
        id: "a938b5a6-fe25-4a06-8050-353bc7146ccd",
        slug: "juno",
      },
    ],
  },
]

describe("<Card />", () => {
  it("renders the <Card />", () => {
    const { container, getByText } = render(
        <Card.Wrapper>
        {slideRows.map((slideItem) => (
            <Card key={`${category} - ${slideItem.title?.toLowerCase()}`}>
                <Card.Title>{slideItem.title}</Card.Title>
                <Card.Row>
                    {slideItem?.data?.map((item) => (
                        //@ts-ignore
                        <Card.Item key={item.id} item={item}>
                            <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                            <Card.Meta>
                                <Card.Subtitle>{item.title}</Card.Subtitle>
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Meta>
                        </Card.Item>
                    ))}
                </Card.Row>
                <Card.Feature category={category}>
                    <Player>
                        <Player.Video src="/videos/trailers/witcher.mp4" />
                        <Player.Button>Play</Player.Button>
                    </Player>
                </Card.Feature>
            </Card>
        ))}
    </Card.Wrapper>
    )

    expect(getByText("Documentaries")).toBeTruthy()
    expect(getByText("Tiger King")).toBeTruthy()
    expect(getByText("Tiger King description")).toBeTruthy()

    expect(getByText("Feel Good")).toBeTruthy()
    expect(getByText("Juno")).toBeTruthy()
    expect(getByText("Juno description")).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the <Card /> with and clicks the card feature", () => {
    const { container, queryByText, getByAltText, getByTestId } = render(
        <Card.Wrapper>
        {slideRows.map((slideItem) => (
            <Card key={`${category} - ${slideItem.title?.toLowerCase()}`}>
                <Card.Title>{slideItem.title}</Card.Title>
                <Card.Row>
                    {slideItem?.data?.map((item) => (
                        //@ts-ignore
                        <Card.Item key={item.id} item={item} data-testid={`${item.slug}-item-feature`}>
                            <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                            <Card.Meta>
                                <Card.Subtitle>{item.title}</Card.Subtitle>
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Meta>
                        </Card.Item>
                    ))}
                </Card.Row>
                <Card.Feature category={category}>
                    <Player>
                        <Player.Video src="/videos/trailers/witcher.mp4" />
                        <Player.Button>Play</Player.Button>
                    </Player>
                </Card.Feature>
            </Card>
        ))}
    </Card.Wrapper>
    )

    expect(queryByText("18")).toBeFalsy()
    fireEvent.click(getByTestId("tiger-king-item-feature"))
    expect(queryByText("18")).toBeTruthy()

    fireEvent.click(getByAltText("Close"))
    expect(queryByText("18")).toBeFalsy()

    expect(queryByText("PG")).toBeFalsy()
    fireEvent.click(getByTestId("juno-item-feature"))
    expect(queryByText("PG")).toBeTruthy()

    fireEvent.click(getByAltText("Close"))
    expect(queryByText("PG")).toBeFalsy()
    expect(container.firstChild).toMatchSnapshot()
  })
})