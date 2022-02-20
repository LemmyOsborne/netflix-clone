import { Card, Player } from "../components";
import { IRow } from "../types/types";

interface ICardContainer {
    slidesRow: IRow[]
    category: string
}

export const CardContainer: React.FC<ICardContainer> = ({ slidesRow, category }) => {

    return (
        <Card.Wrapper>
            {slidesRow.map((slideItem) => (
                <Card key={`${category} - ${slideItem.rowTitle?.toLowerCase()}`}>
                    <Card.Title>{slideItem.rowTitle}</Card.Title>
                    <Card.Row>
                        {slideItem?.data?.map((item) => (
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
        </Card.Wrapper>)

}