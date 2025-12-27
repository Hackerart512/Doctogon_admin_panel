import bcrypt from 'bcryptjs'
import { Admin } from '../models/Admin.js'

export const authenticateAdmin = async (email, password) => {
    if (!email || !password) return null

    const user = await Admin.findOne({ email })

    if (!user) return null

    // Check admin role
    if (user.accountType !== 'ADMIN') return null

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return null

    return {
        email: user.email,
        role: user.accountType,
    }
}
