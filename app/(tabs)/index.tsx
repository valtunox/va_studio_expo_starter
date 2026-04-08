import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';
import { ProgressRing } from '@/components/ProgressRing';
import { useAppTheme } from '@/hooks/useAppTheme';
import { PROFILE, TODAY } from '@/constants/MockData';

function MacroBar({ label, current, target, color, icon }: {
  label: string; current: number; target: number; color: string; icon: string;
}) {
  const pct = Math.min(100, (current / target) * 100);
  const { colors } = useAppTheme();
  return (
    <View style={[s.macroRow, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={[s.macroIcon, { backgroundColor: color + '18' }]}>
        <ThemedText style={{ fontSize: 14 }}>{icon}</ThemedText>
      </View>
      <View style={{ flex: 1 }}>
        <View style={s.macroHeader}>
          <ThemedText style={s.macroLabel}>{label}</ThemedText>
          <ThemedText type="muted" style={s.macroNumbers}>{current}g / {target}g</ThemedText>
        </View>
        <View style={[s.barTrack, { backgroundColor: colors.border }]}>
          <View style={[s.barFill, { width: `${pct}%`, backgroundColor: color }]} />
        </View>
      </View>
    </View>
  );
}

function WaterTracker({ consumed, target }: { consumed: number; target: number }) {
  const { colors } = useAppTheme();
  return (
    <View style={[s.waterCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={s.waterHeader}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <ThemedText style={{ fontSize: 18 }}>💧</ThemedText>
          <ThemedText type="defaultSemiBold">Water</ThemedText>
        </View>
        <ThemedText type="muted" style={{ fontSize: 12 }}>{consumed} / {target} glasses</ThemedText>
      </View>
      <View style={s.waterRow}>
        {Array.from({ length: target }, (_, i) => (
          <View key={i} style={[
            s.waterGlass,
            { backgroundColor: i < consumed ? colors.water + '30' : colors.border,
              borderColor: i < consumed ? colors.water : 'transparent' },
          ]}>
            <Ionicons name="water" size={16} color={i < consumed ? colors.water : colors.textSecondary + '40'} />
          </View>
        ))}
      </View>
    </View>
  );
}

function MealCard({ meal }: { meal: typeof TODAY.meals[0] }) {
  const { colors } = useAppTheme();
  const mealColors: Record<string, string[]> = {
    breakfast: [colors.mealBreakfast, colors.mealBreakfast + '20'],
    lunch: [colors.mealLunch, colors.mealLunch + '20'],
    dinner: [colors.mealDinner, colors.mealDinner + '20'],
    snack: [colors.mealSnack, colors.mealSnack + '20'],
  };
  const [accentColor, bgColor] = mealColors[meal.type] || [colors.tint, colors.tintLight];

  return (
    <View style={[s.mealCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={[s.mealEmoji, { backgroundColor: bgColor }]}>
        <ThemedText style={{ fontSize: 24 }}>{meal.emoji}</ThemedText>
      </View>
      <View style={{ flex: 1 }}>
        <ThemedText type="defaultSemiBold" style={{ fontSize: 14 }}>{meal.name}</ThemedText>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 3 }}>
          <ThemedText type="muted" style={{ fontSize: 11 }}>{meal.time}</ThemedText>
          <View style={[s.mealTypeBadge, { backgroundColor: bgColor }]}>
            <ThemedText style={{ fontSize: 9, fontWeight: '700', color: accentColor, textTransform: 'capitalize' }}>
              {meal.type}
            </ThemedText>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <ThemedText style={{ fontWeight: '800', fontSize: 16, color: accentColor }}>{meal.calories}</ThemedText>
        <ThemedText type="muted" style={{ fontSize: 10 }}>kcal</ThemedText>
      </View>
    </View>
  );
}

export default function DashboardScreen() {
  const { colors, isDark } = useAppTheme();
  const calPct = Math.round((TODAY.caloriesConsumed / PROFILE.calorieTarget) * 100);
  const remaining = PROFILE.calorieTarget - TODAY.caloriesConsumed;

  return (
    <ScrollView style={[s.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient colors={[colors.headerGradientStart, colors.headerGradientEnd]} style={s.header}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <View style={s.headerContent}>
          <View>
            <ThemedText style={s.greeting}>Good morning</ThemedText>
            <ThemedText style={s.headerName}>{PROFILE.name} 👋</ThemedText>
          </View>
          <View style={s.streakBadge}>
            <ThemedText style={{ fontSize: 14 }}>🔥</ThemedText>
            <ThemedText style={s.streakText}>{PROFILE.streak}</ThemedText>
          </View>
        </View>
      </LinearGradient>

      {/* Calorie Card */}
      <View style={[s.calorieCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={s.calorieRow}>
          <ProgressRing
            value={calPct}
            size={130}
            strokeWidth={12}
            color={colors.calorieRing}
            trackColor={isDark ? '#1f2e28' : '#e5e7eb'}
            label={`${calPct}%`}
            sublabel={`${TODAY.caloriesConsumed} kcal`}
          />
          <View style={s.calorieStats}>
            <View style={s.calorieStat}>
              <View style={[s.calDot, { backgroundColor: colors.calorieRing }]} />
              <View>
                <ThemedText type="muted" style={{ fontSize: 11 }}>Consumed</ThemedText>
                <ThemedText style={s.calValue}>{TODAY.caloriesConsumed}</ThemedText>
              </View>
            </View>
            <View style={s.calorieStat}>
              <View style={[s.calDot, { backgroundColor: colors.accent }]} />
              <View>
                <ThemedText type="muted" style={{ fontSize: 11 }}>Remaining</ThemedText>
                <ThemedText style={[s.calValue, { color: colors.accent }]}>{remaining}</ThemedText>
              </View>
            </View>
            <View style={s.calorieStat}>
              <View style={[s.calDot, { backgroundColor: colors.warning }]} />
              <View>
                <ThemedText type="muted" style={{ fontSize: 11 }}>Target</ThemedText>
                <ThemedText style={s.calValue}>{PROFILE.calorieTarget}</ThemedText>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Macros */}
      <View style={s.section}>
        <ThemedText type="defaultSemiBold" style={s.sectionTitle}>Macros</ThemedText>
        <MacroBar label="Protein" current={TODAY.protein} target={PROFILE.proteinTarget} color={colors.protein} icon="🥩" />
        <MacroBar label="Carbs" current={TODAY.carbs} target={PROFILE.carbsTarget} color={colors.carbs} icon="🍞" />
        <MacroBar label="Fat" current={TODAY.fat} target={PROFILE.fatTarget} color={colors.fat} icon="🥑" />
        <MacroBar label="Fiber" current={TODAY.fiber} target={PROFILE.fiberTarget} color={colors.fiber} icon="🥦" />
      </View>

      {/* Water */}
      <View style={s.section}>
        <WaterTracker consumed={TODAY.waterConsumed} target={PROFILE.waterTarget} />
      </View>

      {/* Today's Meals */}
      <View style={s.section}>
        <View style={s.sectionHeader}>
          <ThemedText type="defaultSemiBold" style={s.sectionTitle}>Today's Meals</ThemedText>
          <Pressable style={[s.addBtn, { backgroundColor: colors.tint + '18' }]}>
            <Ionicons name="add" size={16} color={colors.tint} />
            <ThemedText style={{ fontSize: 12, fontWeight: '600', color: colors.tint }}>Add</ThemedText>
          </Pressable>
        </View>
        {TODAY.meals.map(meal => <MealCard key={meal.id} meal={meal} />)}
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingTop: 60, paddingBottom: 30, paddingHorizontal: 24, borderBottomLeftRadius: 28, borderBottomRightRadius: 28 },
  headerContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greeting: { fontSize: 14, color: '#ffffffaa', fontWeight: '500' },
  headerName: { fontSize: 26, fontWeight: '900', color: '#fff', marginTop: 2 },
  streakBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#ffffff20', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  streakText: { fontSize: 16, fontWeight: '800', color: '#fff' },
  calorieCard: { marginHorizontal: 20, marginTop: -20, padding: 20, borderRadius: 20, borderWidth: 1, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12 },
  calorieRow: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  calorieStats: { flex: 1, gap: 12 },
  calorieStat: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  calDot: { width: 8, height: 8, borderRadius: 4 },
  calValue: { fontSize: 18, fontWeight: '800' },
  section: { paddingHorizontal: 20, marginTop: 24 },
  sectionTitle: { marginBottom: 12 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  addBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 },
  macroRow: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderRadius: 14, borderWidth: 1, marginBottom: 8 },
  macroIcon: { width: 36, height: 36, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  macroHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  macroLabel: { fontSize: 13, fontWeight: '600' },
  macroNumbers: { fontSize: 11 },
  barTrack: { height: 6, borderRadius: 3, overflow: 'hidden' },
  barFill: { height: '100%', borderRadius: 3 },
  waterCard: { padding: 16, borderRadius: 16, borderWidth: 1 },
  waterHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  waterRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  waterGlass: { width: 38, height: 38, borderRadius: 10, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center' },
  mealCard: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 14, borderRadius: 16, borderWidth: 1, marginBottom: 8 },
  mealEmoji: { width: 50, height: 50, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  mealTypeBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
});
