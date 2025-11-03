# Typography Components

Reusable typography components for consistent styling across the application.

## Components

### `SectionHeading`
Main section headings (h4 by default)

```jsx
import { SectionHeading } from '../components/typography';

<SectionHeading>Your Title</SectionHeading>
// Or customize:
<SectionHeading variant="h3" sx={{ fontWeight: 700 }}>
  Your Title
</SectionHeading>
```

### `SubHeading`
Subsection headings (h5)

```jsx
import { SubHeading } from '../components/typography';

<SubHeading>Your Subtitle</SubHeading>
```

### `BodyText`
Body text with consistent font size and line height

```jsx
import { BodyText } from '../components/typography';

<BodyText>Your content here</BodyText>
// With custom spacing:
<BodyText sx={{ marginBottom: '1rem' }}>
  Your content here
</BodyText>
```

### `ListItem`
List items for bulleted or numbered lists

```jsx
import { ListItem } from '../components/typography';

<Box component="ul">
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
</Box>
```

### `ExternalLink`
External links with consistent styling

```jsx
import { ExternalLink } from '../components/typography';

<ExternalLink href="https://example.com">
  Click here
</ExternalLink>
```

### `ContentSection`
Wrapper for content sections with consistent spacing

```jsx
import { ContentSection } from '../components/typography';

<ContentSection>
  <SectionHeading>Title</SectionHeading>
  <BodyText>Content...</BodyText>
</ContentSection>
```

## Import All at Once

```jsx
import { 
  SectionHeading, 
  SubHeading, 
  BodyText, 
  ListItem,
  ExternalLink, 
  ContentSection 
} from '../components/typography';
```

## Default Styles

- **SectionHeading**: h4, marginBottom: 1rem, fontWeight: 500
- **SubHeading**: h5, marginBottom: 1rem, fontWeight: 500
- **BodyText**: body1, fontSize: 1.125rem, lineHeight: 1.8
- **ListItem**: li element, fontSize: 1.125rem, lineHeight: 1.8, marginBottom: 0.75rem
- **ExternalLink**: primary.dark color, underlined, opens in new tab
- **ContentSection**: Box with marginBottom: 2rem

All components support the `sx` prop for custom styling while maintaining consistent defaults.

