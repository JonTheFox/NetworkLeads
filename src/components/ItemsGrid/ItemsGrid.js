import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import DisplayedItemsState from "../../store/DisplayedItems.selector.js";
import { useRecoilValue } from "recoil";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
});

function ItemCard({ name, label, description, img }) {
	const classes = useStyles(makeStyles);

	return (
		<Card className={clsx(classes.root, "item-card")}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt={label}
					height="140"
					image={img}
					label={label}
					style={{ paddingBottom: 0 }}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{label}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Add to cart
				</Button>
				<Button size="small" color="primary">
					Learn more
				</Button>
			</CardActions>
		</Card>
	);
}

const ItemsGrid = ({ items = [] }) => {
	const displayedItems = useRecoilValue(DisplayedItemsState);
	const classes = useStyles(makeStyles);
	return (
		<div className="items-grid" style={{ flexGrow: 1 }}>
			<GridList cellHeight={180} className={classes.gridList}>
				<GridListTile
					key="Subheader"
					cols={2}
					style={{ height: "auto" }}
				>
					<ListSubheader component="div">December</ListSubheader>
				</GridListTile>
				{displayedItems?.map((item) => {
					const {
						id,
						name,
						label,
						//description, priceUSD
					} = item;

					const imgUrl = item?.img?.regular;

					return (
						<GridListTile key={id}>
							<img src={imgUrl} alt={label} />
							<GridListTileBar
								title={label}
								actionIcon={
									<IconButton
										aria-label={`info about ${label}`}
										className={classes.icon}
									>
										<InfoIcon />
									</IconButton>
								}
							/>
						</GridListTile>
					);
				})}
			</GridList>
		</div>
	);
};

export default ItemsGrid;
