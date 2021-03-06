import React from 'react'
import * as Block from '../Block'
import * as Paragraph from '../Paragraph'
import * as icons from '../icons'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Block',
  icon: 'Block',

  examples: {
    require: `import * as Block from '@klarna/ui/Block'`,
    type: LIVE,

    examples: {
      Regular: <Block.Installments.Main>
        <Block.Installments.Title>
          Your Installments
        </Block.Installments.Title>
        <Block.Installments.Content>
          <Block.Installments.Value
            title='Estimated total'
            value='€100'
          />
          <Block.Installments.Value
            clarification='†'
            title='APR'
            value='9.99%'
          />
        </Block.Installments.Content>
      </Block.Installments.Main>,

      'Left-Aligned': <Block.Installments.Main leftAlign>
        <Block.Installments.Content>
          <Paragraph.Primary style={{marginTop: -15, marginBottom: -10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at aliquet leo.
          </Paragraph.Primary>
        </Block.Installments.Content>
      </Block.Installments.Main>,

      'With Footer': <Block.Installments.Main leftAlign>
        <Block.Installments.Content>
          <Paragraph.Primary style={{marginTop: -15}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at aliquet leo.
          </Paragraph.Primary>
        </Block.Installments.Content>
        <Block.Footer styles={{main: {base: {marginBottom: -10}}}}>
          <icons.MediumCard />
          <icons.MediumPinDevice />
        </Block.Footer>
      </Block.Installments.Main>,

      'Bordered': <Block.Bordered>
        <Paragraph.Secondary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at aliquet leo.
        </Paragraph.Secondary>
      </Block.Bordered>,

      'Custom-bordered': <Block.Bordered style={{borderRadius: 0}}>
        <Paragraph.Secondary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at aliquet leo.
        </Paragraph.Secondary>
      </Block.Bordered>
    }
  }
}
