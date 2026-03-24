import { ReturnPolicyType } from '../../../types/footer/return_policy'

export const returnPolicyItems: ReturnPolicyType[] = [
    {
        description: 'Something wrong with your order?',
        descriptionItems: [
            'Please inspect your order upon receipt and contact us at ______ within 7 days if the item is defective, damaged or if you receive the wrong item so that we can evaluate the issue and make it right.'
        ]
    },{
        description: 'Do you accept returns?',
        descriptionItems: [
            'Yes, as long as the item(s) being returned reach us within 30 days from the date it was delivered. Only the items that are unworn, unwashed, and still has its tag intact are the ones eligible for return. It must also be in its original packaging.',
            'Exclusions for non-returnable items apply.*'
        ]
    },{
        description: 'Do you accept exchanges?',
        descriptionItems: [
            'The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.'
        ]
    },{
        description: 'How do I return my order?',
        descriptionItems: [
            'To start a return, you can contact us at hello@paperdolls.ph. If your return is accepted, we’ll send you instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.'
        ]
    },{
        description: 'How to know if I can be refunded?',
        descriptionItems: [
            'Once your returned item is received and inspected, we will send you an email to notify you that we have received your returned item. We will also advise you of the approval or rejection of your refund. If approved, then your refund will be processed and credits will automatically be applied to your original method of payment or credit card within a certain amount of days. Only regular-priced items may be refunded, unfortunately, sale items cannot be refunded.'
        ]
    }
]

