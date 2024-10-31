import { Recipe } from '@/types';

const recipes: Recipe[] = [
	{
		id: '736c0c2a-2527-44f0-b2a7-a086f0e850ff',
		title: 'Simple Omelette Recipe',
		imageSrc: 'image-omelette.webp',
		description:
			'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
		preparationTime: [
			{
				id: '4167e866-2af4-4e05-81e5-be606890ebb0',
				position: 1,
				name: 'Total',
				description: 'Approximately 10 minutes',
			},
			{
				id: '5b1e87b9-f7e8-4980-ba3d-b6b22c6b5b7c',
				position: 2,
				name: 'Preparation',
				description: '5 minutes',
			},
			{
				id: 'a7043678-aac3-476d-b3c6-8129f894965c',
				position: 3,
				name: 'Cooking',
				description: '5 minutes',
			},
		],
		ingredients: [
			{
				id: 'fb47b0b3-6902-4da2-a2ec-9f4bb0f27ddb',
				position: 1,
				name: '',
				description: '2-3 large eggs',
			},
			{
				id: 'cb1c0e2a-af65-42a4-9b52-2eb6c0a9e0c7',
				position: 2,
				name: '',
				description: 'Salt, to taste',
			},
			{
				id: '747d358c-adb8-483a-a03c-b34394b0319a',
				position: 3,
				name: '',
				description: 'Pepper, to taste',
			},
			{
				id: '3187540e-aea1-43aa-8ba7-b572e3599557',
				position: 4,
				name: '',
				description: '1 tablespoon of butter or oil',
			},
			{
				id: '61bf6c0d-a8d2-48ca-9968-0ee5a3d8ff7b',
				position: 5,
				name: '',
				description:
					'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
			},
		],
		instructions: [
			{
				id: '3197714b-c8ca-4e7a-abd3-e615f500d75e',
				position: 1,
				name: 'Beat the eggs',
				description:
					'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
			},
			{
				id: '7b91b238-0229-47f6-a24f-bf2427d086cd',
				position: 2,
				name: 'Heat the pan',
				description:
					'Place a non-stick frying pan over medium heat and add butter or oil.',
			},
			{
				id: '119bf6cb-b968-4852-b968-f603dbe28a45',
				position: 3,
				name: 'Cook the omelette',
				description:
					'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
			},
			{
				id: 'ed99253f-a7d3-4d46-82d5-f535dfad6125',
				position: 4,
				name: 'Add fillings (optional)',
				description:
					'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
			},
			{
				id: '861cd4b8-6761-4da3-8911-4b9fce600fd1',
				position: 5,
				name: 'Fold and serve',
				description:
					'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
			},
			{
				id: '88441e9c-7518-444c-81f1-3f19131f4583',
				position: 6,
				name: 'Enjoy',
				description:
					'Serve hot, with additional salt and pepper if needed.',
			},
		],
		nutrition: [
			{ id: 'aa831573-8d55-45f9-bb86-2aca2a7c862c', position: 1, label: 'Calories', value: '277kcal' },
			{ id: '8a418c54-9964-4214-a997-c098c43fecf7', position: 2, label: 'Carbs', value: '0g' },
			{ id: '77d10d31-ab8b-4e32-b834-dfaa48f665c0', position: 3, label: 'Protein', value: '20g' },
			{ id: '645715d8-a569-4300-abba-42e660f3e3b8', position: 4, label: 'Fat', value: '22g' },
		],
	},
];

export default recipes;


